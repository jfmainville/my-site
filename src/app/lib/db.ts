"use server";

import { PrismaClient, User, Post, PostStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { ReturnStatement, UserSession } from "../types";

const prisma = new PrismaClient();

export async function getPosts() {
  let posts;

  posts = await prisma.post.findMany();

  return posts;
}

export async function getUniquePost(slug: String) {
  let posts;

  if (slug) {
    posts = await prisma.post.findUnique({
      where: {
        slug: slug as string,
      },
    });

    return posts;
  }
}

export async function createPost(
  postTitle: String,
  postCategory: String,
  postThumbnail: String,
  postStatus: String,
  postContent: String,
  userData: User,
) {
  let post;

  post = {
    title: postTitle as string,
    thumbnail: postThumbnail as string | null,
    slug: postTitle.replace(" ", "-").toLowerCase() as string,
    content: postContent as string,
    status: (postStatus as PostStatus) || "DRAFT",
    category: postCategory as string,
    userId: userData.id,
  };
  await prisma.post.create({
    data: post,
  });
  redirect("/admin/post");
}

export async function updatePost(
  postData: Post,
  postTitle: String,
  postThumbnail: String,
  postContent: String,
  postCategory: String,
  postStatus: String,
  userData: User,
) {
  let post;

  post = {
    id: postData.id,
    title: postTitle as string,
    thumbnail: postThumbnail as string | null,
    slug: postTitle.replace(" ", "-").toLowerCase() as string,
    content: postContent as string,
    status: postStatus as PostStatus,
    category: postCategory as string,
    userId: userData.id,
  };
  await prisma.post.update({
    where: {
      id: post.id,
    },
    data: post,
  });
  redirect("/admin/post");
}

export async function deletePost(postId: String) {
  await prisma.post.delete({
    where: {
      id: postId as string,
    },
  });
  redirect("/admin/post");
}

export async function handleUserSession(userSession: UserSession) {
  try {
    if (userSession && userSession.user) {
      const userData: User | null = await prisma.user.findUnique({
        where: {
          username: userSession.user?.nickname as string,
        },
      });

      if (!userData) {
        const userData = await prisma.user.create({
          data: {
            username: userSession.user.nickname as string,
            email: (userSession.user.email as string) || "",
            firstName: (userSession.user.name?.split(" ")[0] as string) || "",
            lastName: (userSession.user.name?.split(" ")[1] as string) || "",
          },
        });

        return {
          success: true as boolean,
          error: false as boolean,
          message:
            `Successfully created the user with the username ${userSession.user.nickname}` as string,
          data: userData as User | null,
        };
      }
      return {
        success: true,
        error: false,
        message: `Skipping the creation of the user with the username ${userSession.user.nickname} as it already exists`,
        data: userData as User,
      };
    }
  } catch (error) {
    return {
      success: false as boolean,
      error: true as boolean,
      message: error as string,
      data: null as null,
    };
  }
}

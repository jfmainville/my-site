"use server";

import { PrismaClient, User, Post, PostStatus } from "@prisma/client";
import { redirect } from "next/navigation";

export type UserSession = {
  user: {
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    sub: string;
    sid: string;
    accessToken: string;
    accessTokenScope: string;
    accessTokenExpiresAt: string;
    idToken: string;
    token_type: string;
  };
};

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
) {
  let post;

  post = {
    title: postTitle as string,
    thumbnail: postThumbnail as string | null,
    slug: postTitle.replace(" ", "-").toLowerCase() as string,
    content: postContent as string,
    status: (postStatus as PostStatus) || "DRAFT",
    category: postCategory as string,
    // TODO: Need to use the current userId as reference instead of a hardcoded value
    userId: "seed-user-1",
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
    // TODO: Need to use the current userId as reference instead of a hardcoded value
    userId: "seed-user-2",
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
  if (userSession && userSession.user) {
    const userData: User | null = await prisma.user.findUnique({
      where: {
        username: userSession.user?.nickname as string,
      },
    });

    if (!userData) {
      await prisma.user.create({
        data: {
          username: userSession.user.nickname as string,
          email: (userSession.user.email as string) || "",
          firstName: (userSession.user.name?.split(" ")[0] as string) || "",
          lastName: (userSession.user.name?.split(" ")[1] as string) || "",
        },
      });
    }
  }
}

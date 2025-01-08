"use server";

import { PrismaClient, Post, PostStatus } from "@prisma/client";
import { redirect } from "next/navigation";

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
  postThumbnail: String,
  postContent: String,
  postCategory: String,
) {
  let post;

  post = {
    title: postTitle as string,
    thumbnail: postThumbnail as string | null,
    slug: postTitle.replace(" ", "-").toLowerCase() as string,
    content: postContent as string,
    status: "DRAFT" as PostStatus,
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

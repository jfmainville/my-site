import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  let posts;

  if (slug) {
    posts = await prisma.post.findUnique({
      where: {
        slug: slug,
      },
    });
  } else {
    posts = await prisma.post.findMany();
  }

  return NextResponse.json(
    {
      data: posts,
    },
    { status: 200 },
  );
}

export async function POST(request: Request) {
  const post: Post = await request.json();

  await prisma.post.create({
    data: post,
  });

  return NextResponse.json({ status: 201 });
}

export async function PUT(request: Request) {
  const post: Post = await request.json();

  await prisma.post.update({
    where: {
      id: post.id,
    },
    data: post,
  });

  return NextResponse.json({ status: 200 });
}

export async function DELETE(request: Request) {
  const post: Post = await request.json();

  await prisma.post.delete({
    where: {
      id: post.id,
    },
  });

  return NextResponse.json({ status: 204 });
}

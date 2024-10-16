import { NextResponse } from "next/server";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const posts = await prisma.post.findMany();

  return NextResponse.json(
    {
      data: posts,
    },
    { status: 200 },
  );
}

export async function POST(request: Request) {
  const post = await request.json();

  await prisma.post.create({
    data: post,
  });

  return NextResponse.json(
    {
      data: post,
    },
    { status: 201 },
  );
}

export async function PUT(request: Request) {
  const posts = await prisma.post.findMany();

  return NextResponse.json(
    {
      data: posts,
    },
    { status: 200 },
  );
}

export async function DELETE(request: Request) {
  const posts = await prisma.post.findMany();

  return NextResponse.json(
    {
      data: posts,
    },
    { status: 200 },
  );
}

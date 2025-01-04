import { PrismaClient, User, Post } from "@prisma/client";
import { currentDateTime } from "../src/app/utils/constants";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  const users: User[] = [
    {
      id: "seed-user-1",
      firstName: "Tony",
      lastName: "Stark",
      email: "tony.stark@test.com",
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    },
    {
      id: "seed-user-2",
      firstName: "Steve",
      lastName: "Rogers",
      email: "steve.rogers@test.com",
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    },
    {
      id: "seed-user-3",
      firstName: "Thord",
      lastName: "Odinson",
      email: "thor.odinson@test.com",
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    },
  ];

  const userIds: string[] = users.map((user: User) => user.id);

  await prisma.user.createMany({
    data: users,
  });

  const posts: Post[] = [
    {
      id: "seed-post-1",
      slug: "dummy-blog-bost-1",
      title: "Dummy Blog Post 1",
      thumbnail: "",
      content: "<h1>Dummy Blog Post 1</h1>",
      status: "DRAFT",
      category: "Cybersecurity",
      userId: userIds[0],
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    },
    {
      id: "seed-post-2",
      slug: "dummy-blog-bost-2",
      title: "Dummy Blog Post 2",
      thumbnail: "",
      content: "<h1>Dummy Blog Post 2</h1>",
      status: "DRAFT",
      category: "Cybersecurity",
      userId: userIds[0],
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    },
  ];

  await prisma.post.createMany({
    data: posts,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

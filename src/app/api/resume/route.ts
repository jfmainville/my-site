import { NextResponse } from "next/server";
import { chromium } from "@playwright/test";

export async function POST(request: Request) {
  const hostname = request.headers.get("host");
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    `${process.env.NODE_ENV === "development" ? "http" : "https"}://${hostname}/resume`,
  );
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "Resume_Jean_Frederic_Mainville.pdf",
    printBackground: true,
  });
  await browser.close();
  return NextResponse.json(
    { message: "Successfully exported the resume to a PDF file" },
    { status: 201 },
  );
}

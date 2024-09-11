import { NextResponse } from "next/server";
import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const hostname: string | null = request.headers.get("host");
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    `${process.env.NODE_ENV === "development" ? "http" : "https"}://${hostname}/resume`,
  );
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "./Resume_Jean_Frederic_Mainville.pdf",
    printBackground: true,
  });

  await browser.close();
  const filePath = path.resolve(".", "Resume_Jean_Frederic_Mainville.pdf");
  const pdfFile = fs.readFileSync(filePath);
  return new NextResponse(pdfFile, {
    status: 201,
    headers: new Headers({
      "Content-Disposition": `attachment; filename=Resume_Jean_Frederic_Mainville.pdf`,
      "Content-Type": "application/pdf",
      "Content-Length": pdfFile.length.toString(),
    }),
  });
}

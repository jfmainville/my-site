import { NextResponse } from "next/server";
import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";
import { RESUME_FILENAME, MY_SITE_URL } from "@/app/utils/constants";

// Need to use force-dynamic for Playwright to work properly during the next build command execution
export const dynamic = "force-dynamic";

export async function GET() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${MY_SITE_URL}/resume`);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: `./${RESUME_FILENAME}`,
    printBackground: true,
  });

  await browser.close();
  const filePath = path.resolve(".", RESUME_FILENAME);
  const pdfFile = fs.readFileSync(filePath);
  return new NextResponse(pdfFile, {
    status: 201,
    headers: new Headers({
      "Content-Disposition": `attachment; filename=${RESUME_FILENAME}`,
      "Content-Type": "application/pdf",
      "Content-Length": pdfFile.length.toString(),
    }),
  });
}

/**
 * @jest-environment node
 */

import { testApiHandler } from "next-test-api-route-handler";
import * as appHandler from "./route";
import fs from "fs";
import { RESUME_FILENAME } from "@/app/utils/constants";

describe("Resume API Routes (/api/resume) Test Suite", () => {
  afterAll(() => {
    fs.unlinkSync(RESUME_FILENAME);
  });

  it("should export all the pages of the Resume page to a PDF file", async () => {
    await testApiHandler({
      appHandler,
      requestPatcher(request) {
        request.headers.set("host", "localhost:3000");
      },
      async test({ fetch }) {
        const res = await fetch({ method: "GET" });
        expect(res.status).toBe(201);
      },
    });
  });
});

/**
 * @jest-environment node
 */
import nextConfig from "../../next.config.mjs";
import { GET } from "./api/healthz/route";

describe("site configuration", () => {
  it("hides the powered-by header and allows the LAN dev origin", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
    expect(nextConfig.allowedDevOrigins).toEqual(["192.168.0.214"]);
  });

  it("answers the health check with a 200", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "OK" });
  });
});

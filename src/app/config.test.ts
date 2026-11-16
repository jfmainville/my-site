/**
 * @jest-environment node
 */
import nextConfig from "../../next.config.mjs";

describe("site configuration", () => {
  it("builds a static export for GitHub Pages", () => {
    expect(nextConfig.output).toBe("export");
  });

  it("allows the LAN dev origin", () => {
    expect(nextConfig.allowedDevOrigins).toEqual(["192.168.0.214"]);
  });
});

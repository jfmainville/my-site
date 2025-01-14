import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (
    !req.auth &&
    req.nextUrl.pathname.match("/admin") &&
    req.nextUrl.pathname !== "/signin"
  ) {
    console.log("redirect", req.nextUrl.origin);
    const newUrl = new URL("/signin", req.nextUrl.origin);
    console.log("newUrl", newUrl);
    return NextResponse.redirect(new URL("/signin", req.nextUrl.origin));
  }
});

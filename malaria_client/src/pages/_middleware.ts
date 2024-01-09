import { NextRequest, NextResponse } from "next/server";

const signedinPages = [""];

export default function middleware(request: NextRequest) {
  if (signedinPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies.accessToken;
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.rewrite(url);
    }
  }
}

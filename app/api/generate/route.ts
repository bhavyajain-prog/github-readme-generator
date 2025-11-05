import { NextRequest, NextResponse } from "next/server";
import { generateSVG, ThemeName } from "@/app/lib/svg-themes";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") || "John Doe";
  const caption = searchParams.get("caption") || "";
  const theme = (searchParams.get("theme") || "gradient") as ThemeName;

  const svg = generateSVG(theme, {
    name,
    caption: caption || undefined,
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}

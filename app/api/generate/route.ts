import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") || "John Doe";
  const caption = searchParams.get("caption") || "";

  const svg = `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="200" fill="url(#grad)" rx="10"/>
      
      <!-- Decorative circles -->
      <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.1)"/>
      <circle cx="750" cy="150" r="40" fill="rgba(255,255,255,0.1)"/>
      <circle cx="700" cy="40" r="20" fill="rgba(255,255,255,0.15)"/>
      
      <!-- Text content -->
      <text x="400" y="85" font-family="'Arial', sans-serif" font-size="42" font-weight="bold" fill="white" text-anchor="middle">
        ${escapeXml(name)}
      </text>
      
      ${
        caption
          ? `
      <text x="400" y="130" font-family="'Arial', sans-serif" font-size="24" fill="rgba(255,255,255,0.9)" text-anchor="middle">
        ${escapeXml(caption)}
      </text>
      `
          : ""
      }
      
      <!-- Decorative line -->
      <line x1="300" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

// Helper function to escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

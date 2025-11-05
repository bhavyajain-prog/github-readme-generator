import { SVGGeneratorProps } from "./types";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateOceanTheme({
  name,
  caption,
}: SVGGeneratorProps): string {
  return `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0ea5e9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="200" fill="url(#oceanGrad)" rx="10"/>
      
      <!-- Wave patterns -->
      <path d="M 0 80 Q 100 60 200 80 T 400 80 T 600 80 T 800 80" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <path d="M 0 120 Q 100 100 200 120 T 400 120 T 600 120 T 800 120" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <path d="M 0 160 Q 100 140 200 160 T 400 160 T 600 160 T 800 160" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
      
      <!-- Bubbles -->
      <circle cx="100" cy="40" r="15" fill="rgba(255,255,255,0.2)"/>
      <circle cx="150" cy="60" r="10" fill="rgba(255,255,255,0.15)"/>
      <circle cx="680" cy="50" r="20" fill="rgba(255,255,255,0.2)"/>
      <circle cx="720" cy="35" r="12" fill="rgba(255,255,255,0.18)"/>
      
      <!-- Text content -->
      <text x="400" y="85" font-family="'Arial', sans-serif" font-size="42" font-weight="bold" fill="white" text-anchor="middle">
        ${escapeXml(name)}
      </text>
      
      ${
        caption
          ? `
      <text x="400" y="125" font-family="'Arial', sans-serif" font-size="22" fill="rgba(255,255,255,0.95)" text-anchor="middle">
        ${escapeXml(caption)}
      </text>
      `
          : ""
      }
    </svg>
  `.trim();
}

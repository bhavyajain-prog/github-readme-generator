import { SVGGeneratorProps } from "./types";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSunsetTheme({
  name,
  caption,
}: SVGGeneratorProps): string {
  return `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#f97316;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="200" fill="url(#sunsetGrad)" rx="10"/>
      
      <!-- Sun -->
      <circle cx="700" cy="60" r="40" fill="#fef3c7" opacity="0.8"/>
      <circle cx="700" cy="60" r="50" fill="none" stroke="#fef3c7" stroke-width="2" opacity="0.4"/>
      <circle cx="700" cy="60" r="60" fill="none" stroke="#fef3c7" stroke-width="1" opacity="0.2"/>
      
      <!-- Birds -->
      <path d="M 100 50 Q 110 45 120 50" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
      <path d="M 120 50 Q 130 45 140 50" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
      <path d="M 150 70 Q 160 65 170 70" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
      <path d="M 170 70 Q 180 65 190 70" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Text content -->
      <text x="400" y="110" font-family="'Arial', sans-serif" font-size="42" font-weight="bold" fill="white" text-anchor="middle" stroke="rgba(0,0,0,0.2)" stroke-width="1">
        ${escapeXml(name)}
      </text>
      
      ${
        caption
          ? `
      <text x="400" y="150" font-family="'Arial', sans-serif" font-size="22" fill="rgba(255,255,255,0.95)" text-anchor="middle">
        ${escapeXml(caption)}
      </text>
      `
          : ""
      }
    </svg>
  `.trim();
}

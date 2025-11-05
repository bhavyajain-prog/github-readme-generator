import { SVGGeneratorProps } from "./types";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateForestTheme({
  name,
  caption,
}: SVGGeneratorProps): string {
  return `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="forestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#064e3b;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#059669;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="200" fill="url(#forestGrad)" rx="10"/>
      
      <!-- Tree silhouettes -->
      <polygon points="50,150 70,100 90,150" fill="rgba(0,0,0,0.2)"/>
      <polygon points="30,150 50,80 70,150" fill="rgba(0,0,0,0.15)"/>
      <polygon points="720,150 740,90 760,150" fill="rgba(0,0,0,0.2)"/>
      <polygon points="740,150 760,110 780,150" fill="rgba(0,0,0,0.15)"/>
      
      <!-- Leaves/Particles -->
      <circle cx="120" cy="40" r="8" fill="rgba(255,255,255,0.3)"/>
      <circle cx="180" cy="60" r="6" fill="rgba(255,255,255,0.25)"/>
      <circle cx="650" cy="45" r="7" fill="rgba(255,255,255,0.3)"/>
      <circle cx="700" cy="35" r="5" fill="rgba(255,255,255,0.2)"/>
      
      <!-- Text content -->
      <text x="400" y="90" font-family="'Arial', sans-serif" font-size="42" font-weight="bold" fill="white" text-anchor="middle">
        ${escapeXml(name)}
      </text>
      
      ${
        caption
          ? `
      <text x="400" y="130" font-family="'Arial', sans-serif" font-size="22" fill="rgba(255,255,255,0.95)" text-anchor="middle">
        ${escapeXml(caption)}
      </text>
      `
          : ""
      }
      
      <!-- Ground line -->
      <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>
    </svg>
  `.trim();
}

import { SVGGeneratorProps } from "./types";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateNeonTheme({
  name,
  caption,
}: SVGGeneratorProps): string {
  return `
    <svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f0f23;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="200" fill="url(#neonGrad)" rx="10"/>
      
      <!-- Neon grid pattern -->
      <line x1="0" y1="50" x2="800" y2="50" stroke="#00ffff" stroke-width="0.5" opacity="0.3"/>
      <line x1="0" y1="100" x2="800" y2="100" stroke="#00ffff" stroke-width="0.5" opacity="0.3"/>
      <line x1="0" y1="150" x2="800" y2="150" stroke="#00ffff" stroke-width="0.5" opacity="0.3"/>
      
      <!-- Glowing circles -->
      <circle cx="50" cy="50" r="25" fill="none" stroke="#ff00ff" stroke-width="2" filter="url(#glow)" opacity="0.6"/>
      <circle cx="750" cy="150" r="35" fill="none" stroke="#00ffff" stroke-width="2" filter="url(#glow)" opacity="0.6"/>
      
      <!-- Text content with glow -->
      <text x="400" y="90" font-family="'Arial', sans-serif" font-size="42" font-weight="bold" fill="#00ffff" text-anchor="middle" filter="url(#glow)">
        ${escapeXml(name)}
      </text>
      
      ${
        caption
          ? `
      <text x="400" y="130" font-family="'Arial', sans-serif" font-size="22" fill="#ff00ff" text-anchor="middle" filter="url(#glow)">
        ${escapeXml(caption)}
      </text>
      `
          : ""
      }
    </svg>
  `.trim();
}

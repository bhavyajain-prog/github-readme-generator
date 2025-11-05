import { generateGradientTheme } from "./gradient";
import { generateNeonTheme } from "./neon";
import { generateOceanTheme } from "./ocean";
import { generateSunsetTheme } from "./sunset";
import { generateForestTheme } from "./forest";
import { ThemeName, SVGGeneratorProps } from "./types";

export * from "./types";

export const themeGenerators = {
  gradient: generateGradientTheme,
  neon: generateNeonTheme,
  ocean: generateOceanTheme,
  sunset: generateSunsetTheme,
  forest: generateForestTheme,
};

export function generateSVG(
  theme: ThemeName,
  props: SVGGeneratorProps
): string {
  const generator = themeGenerators[theme] || themeGenerators.gradient;
  return generator(props);
}

export const themeList: Array<{
  value: ThemeName;
  label: string;
  description: string;
  colors: { primary: string; secondary: string };
}> = [
  {
    value: "gradient",
    label: "Gradient",
    description: "Purple gradient with circles",
    colors: { primary: "#667eea", secondary: "#764ba2" },
  },
  {
    value: "neon",
    label: "Neon",
    description: "Dark with glowing effects",
    colors: { primary: "#00ffff", secondary: "#ff00ff" },
  },
  {
    value: "ocean",
    label: "Ocean",
    description: "Blue waves and bubbles",
    colors: { primary: "#1e3a8a", secondary: "#06b6d4" },
  },
  {
    value: "sunset",
    label: "Sunset",
    description: "Warm orange and red tones",
    colors: { primary: "#fbbf24", secondary: "#dc2626" },
  },
  {
    value: "forest",
    label: "Forest",
    description: "Green with tree silhouettes",
    colors: { primary: "#064e3b", secondary: "#10b981" },
  },
];

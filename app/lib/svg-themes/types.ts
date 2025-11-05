export interface ThemeColors {
  gradientStart: string;
  gradientEnd: string;
  textColor: string;
  captionColor: string;
  decorativeColor: string;
}

export interface SVGGeneratorProps {
  name: string;
  caption?: string;
  colors?: ThemeColors;
}

export type ThemeName =
  | "gradient"
  | "neon"
  | "ocean"
  | "sunset"
  | "forest";

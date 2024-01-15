export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "caption";
export type FontWeightType = "thin" | "light" | "regular" | "medium" | "bold";
export type FontColorType =
  | "textDefault"
  | "textWhite"
  | "textPrimary"
  | "textBlack000"
  | "textBlack100"
  | "textBlack200"
  | "textGray000"
  | "textGray100"
  | "textGray200"
  | "textGray300"
  | "textRed000"
  | "textGrayAndWhite"
  | "textYellow";
export type FontFamily = "BMJua" | "Noto Sans KR";

export const FontColor = {
  textDefault: "var(--textDefault)",
  textWhite: "var(--textWhite)",
  textPrimary: "var(--textPrimary)",
  textBlack000: "var(--textBlack000)",
  textBlack100: "var(--textBlack100)",
  textBlack200: "var(--textBlack200)",
  textGray000: "var(--textGray000)",
  textGray100: "var(--textGray100)",
  textGray200: "var(--textGray200)",
  textGray300: "#C6C6C6",
  textRed000: "var(--textRed000)",
  textGrayAndWhite: "var(--textGrayAndWhite)",
  textYellow: "var(--textYellow)",
};

export function FontSize(variant: string) {
  switch (variant) {
    case "h1":
      return 26;
    case "h2":
      return 26;
    case "h3":
      return 24;
    case "h4":
      return 22;
    case "h5":
      return 22;
    case "body1":
      return 18;
    case "body2":
      return 16;
    case "caption":
      return 14;
    default:
      return 16;
  }
}

export function FontWeight(weight: string) {
  switch (weight) {
    case "thin":
      return 100;
    case "light":
      return 300;
    case "regular":
      return 400;
    case "medium":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
}

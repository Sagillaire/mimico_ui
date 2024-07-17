interface ColorPalette {
  primary: string;
  secondary: string;
  brown: string;
  brownAccent: string;
  pink: string;
}

interface BorderPalette {
  default: string;
  secondary: string;
}

interface ThemeTextColorPalette {
  text: string;
  primary: string;
  tertiary: string;
  secondary: string;
}

interface Background {
  main: string;
}

interface Theme {
  main: ColorPalette;
  border: BorderPalette;
  background: Background;
  color: ThemeTextColorPalette;
}

interface IGlobalTheme {
  light: Theme;
}

export type TThemeColor = "text" | "primary" | "secondary";

export const GlobalTheme: IGlobalTheme = {
  light: {
    background: {
      main: "#F7DEAE",
    },
    main: {
      primary: "#D73F3F",
      secondary: "#949494",
      brown: "#661414",
      brownAccent: "#841212",
      pink: "#E47F7F",
    },
    border: {
      default: "#372721",
      secondary: "#D73F3F",
    },
    color: {
      text: "#5C5C5C",
      primary: "#FAF1E0",
      secondary: "#D73F3F",
      tertiary: "#000000",
    },
  },
};

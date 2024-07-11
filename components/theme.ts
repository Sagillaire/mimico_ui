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

interface TextColorPalette {
  primary: string;
  secondary: string;
}

interface Background {
  main: string;
}

interface Theme {
  main: ColorPalette;
  border: BorderPalette;
  background: Background;
  color: TextColorPalette;
}

interface IGlobalTheme {
  light: Theme;
}

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
      primary: "#FAF1E0",
      secondary: "#D73F3F",
    },
  },
};

"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(49, 51, 56)",
    },
    secondary: {
      main: "rgb(43, 45, 49)",
    },
    dark: {
      main: "rgb(30, 31, 34)",
    },
    light: {
      main: "rgb(78, 80, 88)",
    },
    bg: {
      background: "rgb(49, 51, 56)",
    },
    custom: {
      main: "rgb(49, 51, 56)",
      sec: "rgb(181, 186, 193)",
      white: "rgb(242, 243, 245)",
      green: "rgb(35, 165, 89)",
      line: "rgb(49, 51, 56)",
      grey: "rgb(219, 222, 225)",
    },
  },
  typography: {
    fontFamily: "inherit",
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          color: "#fff",
          fontWeight: "600",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "55px",
          background: "#fff",
          fontWeight: "600",
          color: "#000",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: "18px",
          fontWeight: "500",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          color: "#fff",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          color: "#fff",
        },
        outlined: {
          color: "#fff",
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);

declare module "@mui/material/styles" {
  interface Palette {
    dark: {
      main: string;
    };
    light: {
      main: string;
    };
    bg: {
      background: string;
    };
    custom: {
      main: string;
      sec: string;
      white: string;
      green: string;
      line: string;
      grey: string;
    };
  }

  interface PaletteOptions {
    dark: {
      main: string;
    };
    light: {
      main: string;
    };
    bg: {
      background: string;
    };
    custom: {
      main: string;
      sec: string;
      white: string;
      green: string;
      line: string;
      grey: string;
    };
  }
}

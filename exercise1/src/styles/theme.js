import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#43766C",
      light: "#EAF2E6",
    },
    dark: {
      main: "rgba(0,0,0,0.8)",
      light: "rgba(0,0,0,0.4)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xs1: 465,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

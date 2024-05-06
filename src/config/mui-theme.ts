import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1000,
      xl: 1140,
    },
  },
  palette:{
    primary:{
      main:"#FFC107"
    }
  }
});

import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[200],
      dark: blue[300],
      light: blue[200],
      contrastText: '#ffffff'
    },
    secondary: {
      main: cyan[400],
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#f1f1f1',
      default: "#f7f7f7"
    },
  }
})
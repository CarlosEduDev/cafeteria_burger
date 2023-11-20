import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      paper: '#303134',
      default: "#202124"
    },
  },
  typography: {
    allVariants:{
      color: 'white'
    }
  }
})
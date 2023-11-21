import { createTheme } from "@mui/material";
import { yellow, cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[300],
      dark: yellow[300],
      light: yellow[200],
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
import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header";
import SideNav from "./Pages/SideNav";
import HomePage from "./Pages/HomePage";
import { createTheme, Grid, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#8f95a3",
    },
    secondary: {
      main: "#0da9de",
    },
  },
  typography: {
    // fontFamily: "Merriweather, serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="App">
        <Grid item xs={2}>
          <SideNav />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <HomePage />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

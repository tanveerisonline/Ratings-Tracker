import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header";
import SideNav from "./Pages/SideNav";
import HomePage from "./Pages/HomePage";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container className="App">
      <Grid item xs={2}>
        <SideNav />
      </Grid>
      <Grid item xs={10}>
        <Header />
        <HomePage />
      </Grid>
    </Grid>
  );
}

export default App;

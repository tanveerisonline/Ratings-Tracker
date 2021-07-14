import React from "react";
import TabContainer from "../Components/TabContainer";
import Filter from "../Components/Filter";
import { Grid } from "@material-ui/core";
const HomePage = () => {
  return (
    <Grid container className="home" xs={12}>
      <Grid item xs={9}>
        <TabContainer />
      </Grid>
      <Grid item xs={3}>
        <Filter />
      </Grid>
    </Grid>
  );
};

export default HomePage;

import React from "react";
import TabContainer from "../components/TabContainer";
import Filter from "components/Filter";
import { Grid } from "@material-ui/core";
// import ReviewManagemnt from "views/ReviewManagement/Components/innerRoute";
const HomePage = () => {
  return (
    <Grid container className="home" xs={12}>
      <Grid item xs={7} sm={8} md={9}>
        <TabContainer />
      </Grid>
      <Grid item xs={5} sm={4} md={3}>
        <Filter />
      </Grid>
    </Grid>
  );
};

export default HomePage;

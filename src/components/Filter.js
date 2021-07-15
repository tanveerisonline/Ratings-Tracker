import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";

import "./Filter.css";

const Filter = () => {
  return (
    <Grid container className="filter">
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <Typography variant="h6">Filters</Typography>
      </div>
      <DateFilter />
      <Divider />
      <ReviewFilter />
      <PortfolioFilter />
      <GroupFilter />
      <Button
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        color="primary"
        variant="contained"
        startIcon={<SystemUpdateAltOutlinedIcon />}
      >
        DOWNLOAD DATA
      </Button>
    </Grid>
  );
};
export default Filter;

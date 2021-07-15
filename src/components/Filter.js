import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import "./Filter.css";

const Filter = () => {
  return (
    <Grid container className="filter">
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <h4>Filters</h4>
      </div>
      {/* <DateFilter />
      <Divider />
      <ReviewFilter />
      <PortfolioFilter />
      <GroupFilter />
      <button>DOWNLOAD DATA</button> */}
    </Grid>
  );
};
export default Filter;

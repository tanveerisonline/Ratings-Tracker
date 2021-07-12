import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";

const Filter = () => {
  return (
    <div className="filter">
      <h5>Filters</h5>
      <DateFilter />
      <ReviewFilter />
      <PortfolioFilter />
      <GroupFilter />
      <button>DOWNLOAD DATA</button>
    </div>
  );
};
export default Filter;

import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <h4>Filters</h4>
      </div>
      <DateFilter />
      <ReviewFilter />
      <PortfolioFilter />
      <GroupFilter />
      <button>DOWNLOAD DATA</button>
    </div>
  );
};
export default Filter;

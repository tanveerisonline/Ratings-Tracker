import React from "react";
import { Grid } from "@material-ui/core";

const PortfolioFilter = () => {
  return (
    <Grid item xs={12} className="portfolio">
      <h4>MY PORTFOLIO</h4>
      <div>
        <input type="text" className="portfolio-input" />
        East Region
      </div>
      <button>FILTER PROPERTIES</button>
    </Grid>
  );
};

export default PortfolioFilter;

import React from "react";
import { Grid } from "@material-ui/core";

const PortfolioFilter = () => {
  return (
    <Grid item xs={12} className="portfolio-main">
      <div>
        <input type="text" className="portfolio-input" />
        East Region
      </div>
      <button>FILTER PROPERTIES</button>
    </Grid>
  );
};

export default PortfolioFilter;

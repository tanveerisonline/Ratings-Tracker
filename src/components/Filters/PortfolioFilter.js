import React from "react";
import { Grid } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const PortfolioFilter = () => {
  return (
    <Grid item xs={12} className="portfolio">
      <h4>MY PORTFOLIO</h4>
      <div>
        <input type="text" className="portfolio-input" />
        East Region
      </div>
      <Button
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        FILTER PROPERTIES
      </Button>
    </Grid>
  );
};

export default PortfolioFilter;

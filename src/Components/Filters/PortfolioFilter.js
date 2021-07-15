import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    backgroundColor: "#ffffff",
    width: 65,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const PortfolioFilter = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
    }
  };
  return (
    <Grid item xs={12} className="portfolio">
      <h4>MY PORTFOLIO</h4>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="portfolio-form"
      >
        <Grid className="portfolio-text">
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="378"
            placeholder="378"
            variant="outlined"
            color="secondary"
          />
          East Region
        </Grid>
        <Button
          // onClick={() => console.log("you clicked APPLY button")}
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          FILTER PROPERTIES
        </Button>
      </form>
    </Grid>
  );
};

export default PortfolioFilter;

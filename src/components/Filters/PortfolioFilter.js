import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "orange",
    marginLeft: 45,
  },
  textField: {
    // marginTop: 120,
    // marginBottom: 20,
    // display: "block",
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: "15px",
    color: "red",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    width: 50,
    height: 45,
  },
  filBtn: {
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 200,
  //   color: "red",
  // },

  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  title: {
    marginLeft: 20,
    fontSize: 13,
    color: "#383e4c",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "75%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,

    // width: "64%",
    // height: "40px",
    // color: "#fff",
    // display: "flex",
    // fontSize: "12px",
    // marginLeft: 50,
    // background: "#0da9de",
    // marginTop: 15,
    // borderRadius: 10,
  },
  region: {
    display: "flex",
    flexDirection: "row",
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
    <Grid item xs={12} className={classes.root}>
      <Typography className={classes.heading}>MY PORTFOLIO:</Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="portfolio-form"
      >
        <Grid className={classes.region}>
          <TextField
            className={classes.textField}
            onChange={(e) => setTitle(e.target.value)}
            // label="378"
            placeholder="378"
            // variant="outlined"
            color="secondary"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Typography className={classes.title}>East Region</Typography>
        </Grid>
        <Button
          className={classes.btn}
          onClick={() => console.log("you clicked button")}
          type="submit"
          color="primary"
          variant="contained"
          // marginTop="10"
          endIcon={<KeyboardArrowRightIcon className={classes.arrow} />}
        >
          <Typography className={classes.filBtn}>FILTER PROPERTIES</Typography>
        </Button>
      </form>
    </Grid>
  );
};

export default PortfolioFilter;

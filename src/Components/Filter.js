import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";

import "./Filter.css";
const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    "&::after": {
      textDecoration: "none",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    backgroundColor: "#fff",
    marginRight: theme.spacing(1),
    borderRadius: "5px",
    height: 40,
    width: 200,
    "&::after": {
      textDecoration: "none",
    },
  },
  btn: {
    fontSize: 12,
    color: "#fff",
    marginTop: "10px",
    // backgroundColor: "#8f95a3",
    // "&:hover": {
    //   backgroundColor: "#777b89",
    // },
  },
  title: {
    margin: 10,
    fontSize: "12px",
  },
  // input: {
  //   width: "160px",
  //   backgroundColor: "#fff",
  //   borderRadius: "10px",
  //   fontSize: "12px",
  // },'@progress/kendo-react-dateinputs'
}));
const Filter = () => {
  const classes = useStyles();

  return (
    <Grid container className="filter">
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <h4>Filters</h4>
      </div>
      <DateFilter />
      <Divider />
      <ReviewFilter />
      <PortfolioFilter />
      <GroupFilter />
      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<SystemUpdateAltOutlinedIcon />}
      >
        DOWNLOAD DATA
      </Button>
    </Grid>
  );
};
export default Filter;

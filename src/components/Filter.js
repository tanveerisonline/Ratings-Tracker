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
  },
  Dbtn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    marginLeft: 50,
    background: "#0da9de",
    marginTop: 30,
    borderRadius: 10,
  },
  downBtn: {
    // marginLeft: 10,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
    // "&:hover": {
    //   backgroundColor: "#777b89",
    // },
  },
  filterTitle: {
    marginLeft: "10px",
    fontWeight: 800,
    color: "#383e4c",
    fontSize: "15px",
    // backgroundColor: "red",
  },
  divider: {
    backgroundColor: "#6b6d82",
    width: "78%",
    marginLeft: "45px",
    marginTop: "35px",
  },
}));
const Filter = () => {
  const classes = useStyles();

  return (
    <Grid container className="filter">
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <Typography className={classes.filterTitle}>Filters</Typography>
      </div>
      <DateFilter />
      <Divider className={classes.divider} variant="middle" />
      <ReviewFilter />
      <Divider className={classes.divider} variant="middle" />
      <PortfolioFilter />
      <Divider className={classes.divider} variant="middle" />
      <GroupFilter />
      <Button
        className={classes.Dbtn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<SystemUpdateAltOutlinedIcon />}
      >
        <Typography className={classes.downBtn}>DOWNLOAD DATA</Typography>
      </Button>
    </Grid>
  );
};
export default Filter;

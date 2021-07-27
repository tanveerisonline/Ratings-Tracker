import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  inner: {
    display: "flex",
    backgroundColor: "#fff",
    height: 45,
    width: 220,
    borderRadius: 14,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  downIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#8f9fa3",
    cursor: "pointer",
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },

    // display:"none"
  },
  textField: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "600",
    paddingLeft: "15px",
    // width: 200,
    height: 43,
    // display: "none",
    borderRadius: 14,
    background: "#fff",
    border: "none",
    // alignItems: "normal",
    // paddingTop: 10,
    "&::before": {
      borderBottom: "none",
      display: "none",
    },
    "&::after": {
      borderBottom: "none",
      display: "none",
    },
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  to: {
    marginLeft: 20,
    fontSize: 13,
    // color: "#383e4c",
    color: "#6b6d82",
    fontWeight: 600,
    paddingTop: 12,
    paddingBottom: 12,
    alignContent: "left",
  },
}));

export default function DateFilter(props) {
  const classes = useStyles();
  const { startDate, endDate, handleChange, handleChange2 } = props;
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography className={classes.heading}>SHOW RATINGS FOR:</Typography>
      <div className={classes.inner}>
        <DatePicker
          name="startDate"
          className={classes.textField}
          placeholderText="MM/DD/YYYY"
          dateFormat="MM/dd/yyyy"
          selected={startDate}
          onChange={(date) => handleChange(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <KeyboardArrowDownIcon className={classes.downIcon} />
      </div>
      <Typography className={classes.to}>TO</Typography>
      <div className={classes.inner}>
        <DatePicker
          className={classes.textField}
          placeholderText="MM/DD/YYYY"
          dateFormat="MM/dd/yyyy"
          selected={endDate}
          onChange={(date) => handleChange2(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          name="endDate"
        />
        <KeyboardArrowDownIcon className={classes.downIcon} />
      </div>
    </Grid>
  );
}

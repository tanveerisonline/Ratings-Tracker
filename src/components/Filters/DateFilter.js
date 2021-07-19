import "date-fns";
import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Typography, Container } from "@material-ui/core";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { ArrowLeft, CenterFocusStrong } from "@material-ui/icons";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    marginLeft: 45,
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
    // justifyContent: "center",
    alignItems: "center",
  },
  downIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#8f9fa3",
    cursor: "pointer",

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

export default function DateFilter() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography className={classes.heading}>SHOW RATINGS FOR:</Typography>
      <div className={classes.inner}>
        <DatePicker
          className={classes.textField}
          placeholderText="MM/DD/YYYY"
          dateFormat="MM/dd/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
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
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <KeyboardArrowDownIcon className={classes.downIcon} />
      </div>
    </Grid>
  );
}

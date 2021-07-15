import "date-fns";
import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Typography, Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
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
  textField: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    display: "inline-flex",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "600",
    paddingLeft: "15px",
    width: 200,
    height: 45,
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
  apply: {
    marginLeft: 10,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  btn: {
    width: "35%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,
  },
}));

export default function DateFilter() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <Grid item xs={12} className={classes.root}>
      {/* <Container className={classes.root}> */}
      <Typography className={classes.heading}>SHOW RATINGS FOR:</Typography>
      <DatePicker
        className={classes.textField}
        placeholderText="MM/DD/YYYY"
        dateFormat="MM/dd/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        endIcon={<KeyboardArrowRightIcon />}
      />
      <Typography className={classes.to}>TO</Typography>
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
      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        variant="contained"
        marginTop="10"
        color="primary"
        endIcon={<KeyboardArrowRightIcon />}
      >
        <Typography className={classes.apply}>APPLY</Typography>
      </Button>
      {/* </Container> */}
    </Grid>
  );
}

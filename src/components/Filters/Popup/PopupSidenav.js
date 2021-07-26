import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Popup.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import FilterImage2 from "../../FilterImage2.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  btn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#7bb42d",
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 30,
  },
  filterImg: {
    height: 20,
    width: 20,
    // border: "1px solid red",
  },
  rightIcon: {
    // marginLeft: 12,
  },
  apply: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
}));

const PopupSidenav = () => {
  const classes = useStyles();
  return (
    <Grid className="popup-sidenav">
      <div className="side-names1">
        <span>
          <a>My Portfolio</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      {/* <Divider variant="middle" /> */}
      <div className="side-names2">
        <span>
          <a>SVP</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />

      <div className="side-names3">
        <span>
          <a>SRLTD</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names4">
        <span>
          <a>RLTD</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names5">
        <span>
          <a>RVP</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names6">
        <span>
          <a>RM</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names7">
        <span>
          <a>Manager</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names8">
        <span>
          <a>Additional User (Reader)</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names9">
        <span>
          <a>Additional User (Publisher)</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names10">
        <span>
          <a>Additional User 3</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <div className="side-names11">
        <span>
          <a>Additional User 4</a>
        </span>
        <span className="right-icon">
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <Divider variant="middle" />
      <Button
        className={classes.btn}
        // onClick={() => console.log(filterData)}
        type="submit"
        variant="contained"
        marginTop="10"
        color="secondary"
        startIcon={
          <img src={FilterImage2} alt="Img" className={classes.filterImg} />
        }
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.apply}>APPLY FILTER</Typography>
      </Button>
    </Grid>
  );
};

export default PopupSidenav;

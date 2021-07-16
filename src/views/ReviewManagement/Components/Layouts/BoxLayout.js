import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    // width: "120%",
    // height: "200px",
    // border: "1px solid",
    borderRadius: "15px",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    marginBottom: 10,
    backgroundColor: "#8f95a3",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
    // backgroundColor: "white",
    // padding: 18,
  },
  innerTypographyDiv: {
    // backgroundColor: "#383E4C",
    height: 28,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 15,
    paddingTop: 20,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  filtetIcon: {
    color: "#fff",
    height: "28px",
    width: "28px",
    backgroundColor: "#2b3b5c",
    borderRadius: "4px",
    marginRight: "5px",
    marginBottom: "5px",
    // padding: "5px",
    // margin-left: 45px;
    // height: 28px;
    // width: 28px;
    // border-radius: 4px;
    // color: #fff;
    // display: flex;
    // justifyContent: "center",
    // alignItems: "center",
    // background-color: #2b3b5c;
    // padding: 1px;
  },
  dataText: {
    color: "#fff",
    fontSize: 14,
    // fontWeight: 600,
  },
}));

export default function BoxLayout(props) {
  const classes = useStyles();

  const { children, label } = props;

  return (
    <Grid className={classes.mainGrid}>
      {/* <FilterListOutlinedIcon /> */}
      <div className={classes.innerTypographyDiv}>
        <FilterListOutlinedIcon className={classes.filtetIcon} />
        <Box className={classes.dataText}>{label}</Box>
      </div>
      {children}
    </Grid>
  );
}

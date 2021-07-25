import { Grid, makeStyles, Box } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import starIcon from "./starIcon.png";
import { Autocomplete } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    borderRadius: "15px",
    marginBottom: 10,
    // color: "red",
    backgroundColor: "#2b3b5c",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
  },
  mainGridWhite: {
    borderRadius: "15px",
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
  },
  innerTypographyDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  dataText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    padding: "10px 20px",
  },
  dataTextWhite: {
    color: "#8f95a3",
    fontSize: 16,
    fontWeight: 500,
    padding: "10px 12px",
  },
  starIconImg: {
    height: 25,
    width: 25,
    borderRadius: "5px",
    paddingLeft: "9px",
    paddingTop: "4px",
    paddingBottom: "1px",
    backgroundColor: "#2b3b5c",
    "& img": {
      maxWidth: "60%",
    },
  },
}));

export default function BoxLayout(props) {
  const classes = useStyles();

  const { children, label, white } = props;

  return (
    <Grid className={white ? classes.mainGridWhite : classes.mainGrid}>
      <div className={classes.innerTypographyDiv}>
        {white ? (
          <div className={classes.starIconImg}>
            <img src={starIcon} alt="Img" />
          </div>
        ) : null}
        <Box className={white ? classes.dataTextWhite : classes.dataText}>
          {label}
        </Box>
      </div>
      {children}
    </Grid>
  );
}

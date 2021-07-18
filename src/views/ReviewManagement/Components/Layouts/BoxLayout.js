import { Grid, makeStyles, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

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
    backgroundColor: "red",
    padding: "8px",
    boxShadow: "0 5px 8px 2px rgba(0,0,0,0.1)",
  },
  innerTypographyDiv: {
    // alignItems: "center",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // paddingLeft: 15,
    // paddingTop: 20,
    // display: "flex",
  },

  dataText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    padding: "10px 20px",
  },
}));

export default function BoxLayout(props) {
  const classes = useStyles();

  const { children, label, white } = props;

  return (
    <Grid className={white ? classes.mainGridWhite : classes.mainGrid}>
      <div className={classes.innerTypographyDiv}>
        <Box className={classes.dataText}>{label}</Box>
      </div>
      {children}
    </Grid>
  );
}
// {"mode":"full","isActive":false}

import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  // input: {
  //   width: "160px",
  //   backgroundColor: "#fff",
  //   borderRadius: "10px",
  //   fontSize: "12px",
  // },
}));

export default function DateFilter() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className="date-filter">
      <h4>SHOW RATINGS FOR:</h4>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography>TO</Typography>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button> APPLY </button>
    </Grid>
  );
}

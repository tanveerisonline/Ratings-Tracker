import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Progress from "components/Progress/CircularProgress";
const useStyles = makeStyles((theme) => ({
  paper: {},
  root: {
    height: 230,
    maxHeight: 230,
  },
  percentGrid: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    flexGrow: 1,
  },
  reviewGrid: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 40,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  filterChild: {
    fontSize: 14,
    fontWeight: "500",
  },
}));
export default function StarRating({ StarRatingData }) {
  const classes = useStyles();
  var i = 10;
  return (
    <Grid xs={12} className={classes.root}>
      <Grid item alignItems="center" container className={classes.percentGrid}>
        <Grid item xs={6}>
          <Progress
            data={StarRatingData?.percentage || 0}
            innerCircleValue={StarRatingData?.average || 0}
            size={60}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.filterTitle}>
            {" "}
            Overall Rating
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.reviewGrid}>
        <Grid item xs={5}>
          <Typography
          className={classes.filterTitle}
          
          >{StarRatingData?.count || 0}</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.filterTitle}>
            {" "}
            Reviews Received
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

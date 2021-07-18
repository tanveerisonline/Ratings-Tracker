import React, { useState } from "react";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingsRollup";
import Sentiments from "./RatingsBreakdown";
import { Box, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import RatingsRollup from "./RatingsRollup";
import RatingsBreakdown from "./RatingsBreakdown";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  starRating: {
    color: "pink",
  },
  // fa-star: {
  // height: "26px",
  // width: "26px",
  // borderRadius: "5px",
  // // fontSize: "22px",
  // backgroundColor: "green",
  // color: "#fff",
  // },
}));
export default function Index({
  GroupByData,
  siteFilter,
  reviewTrendFilterOptions,
  tab,
}) {
  const [groupBy, setGroupBy] = useState("MONTH");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [sitesSelected, setSitesSelected] = useState("");
  const [propertyFilter, setSelectedAdvancesPropeerties] = useState(null);
  const [reviewTrendFilter, setReviewTrendFilter] = useState("N_O_R");

  const classes = useStyles();
  return (
    <Grid style={{ marginTop: 10 }} xs={12}>
      {/* <Divider /> */}
      <div className={classes.root}>
        {/* <div className={classes.starRating}> */}
        <Grid item container spacing={3}>
          <Grid item xs={3}>
            <BoxLayout
              className={classes.starRating}
              label="Star Rating"
              white={true}
            >
              {/* <StarRateRoundedIcon className={classes.star} /> */}
              <i className="fas fa-star"></i>
              <StarRating />
            </BoxLayout>
          </Grid>

          <Grid item xs={4}>
            <BoxLayout label="Ratings Rollup">
              <RatingsRollup />
            </BoxLayout>
          </Grid>
          <Grid item xs={5}>
            <BoxLayout label="Ratings Breakdown">
              <RatingsBreakdown />
            </BoxLayout>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <BoxLayout label="Review Trends">
          <ReviewTrend />
        </BoxLayout>
      </div>
    </Grid>
  );
}
// {"mode":"full","isActive":false}

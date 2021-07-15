import React, { useState } from "react";
import StarRating from "./StarRating";
import RatingBreakdown from "./RatingBrakdown";
import Sentiments from "./Sentiments";
import { Box, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReviewTrend from "views/ReviewManagement/Components/snapshot/ReviewTrend";
import BoxLayout from "views/ReviewManagement/Components/Layouts/BoxLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
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
      <Divider />
      <div className={classes.root}>
        <Grid item container spacing={1}>
          <Grid item xs={3}>
            <BoxLayout label="Star Rating">
              <StarRating />
            </BoxLayout>
          </Grid>

          <Grid item xs={5}>
            <BoxLayout label="Rating Breakdown">
              <RatingBreakdown />
            </BoxLayout>
          </Grid>
          <Grid item xs={4}>
            <BoxLayout label="Sentiments Breakdown">
              <Sentiments />
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

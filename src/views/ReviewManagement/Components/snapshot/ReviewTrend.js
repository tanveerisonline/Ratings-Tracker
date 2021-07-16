import React from "react";
import AreaGraph from "components/GraphsNew/Area/index";
import * as constant from "views/ReviewManagement/constant";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import Radio from "components/form/RadioButton/SimpleRadio";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 430,
    // backgroundColor: "yellow",
    borderRadius: "15px",
    // maxHeight: 230,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: "3%",
    color: "red",
  },
  areaGraph: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    // height: "30px",
  },
}));
export default function ReviewTrend({
  reviewTrendData,
  filterSelected,
  setFilterSelected,
  filterData,
}) {
  const classes = useStyles();

  console.log(filterData);
  return (
    <Grid
      style={{
        // marginBottom: 10,
        minHeight: 300,
      }}
    >
      <Grid
        container
        // spacing={2}
        direction="row"
        justify="flex-end"
        style={{ paddingRight: 30, marginTop: -20 }}
      >
        {filterData?.map((item) => (
          <Grid item>
            <Radio
              isChecked={filterSelected == item.id}
              label={item.value}
              value="1"
              additionalStyles={{}}
              labelStyles={{
                fontSize: 10,
              }}
              handleChange={(data) => {
                setFilterSelected(item.id);
              }}
            />
          </Grid>
        ))}
      </Grid>

      {constant?.RatingGraph == null ? (
        <Box
          flexWrap="wrap"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.title}> No Records Found</Typography>
        </Box>
      ) : (
        <Box mt={3} pl={0} pr={0} mb={0}>
          <AreaGraph
            className={classes.areaGraph}
            graphData={constant?.RatingGraph.graphs}
            mainData={constant?.RatingGraph.inputData.data}
            height={340}
            AdditonalLegendsStyles={{
              marginTop: -20,
              // display: "flex",
            }}
          />
        </Box>
      )}
    </Grid>
  );
}

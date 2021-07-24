import React from "react";
import AreaGraph from "components/GraphsNew/Area/index";
import * as constant from "views/ReviewManagement/constant";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import Radio from "components/form/RadioButton/SimpleRadio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
// import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: 430,
    width: "1192px",
    height: "491px",
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
    borderRadius: "6px",
    // height: "30px",
  },
  exam: {
    color: "#fff",
    backgroundColor: "#4f5b75",
    borderRadius: "5px",
  },
  divide: {
    backgroundColor: "gray",
  },
}));
export default function ReviewTrend({
  reviewTrendData,
  filterSelected,
  setFilterSelected,
  filterData,
}) {
  const [value, setValue] = React.useState();
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const classes = useStyles();

  // console.log(filterData);
  return (
    <Grid
      container
      direction="row"
      style={{
        // marginBottom: 10,
        height: 340,
      }}
    >
      <Grid
        className={classes.exam}
        container
        item
        xs={3}
        direction="column"
        justify="flex-start"
        style={{ paddingTop: 12 }}
      >
        {filterData?.map((item) => (
          <Grid item>
            <Radio
              isChecked={item.value}
              label={item.label}
              // value="1"
              additionalStyles={{
                color: "#fff",
                height: "16px",
              }}
              labelStyles={{
                fontSize: 12,
              }}
              // handleChange={(data) => {
              //   setFilterSelected(item.id);
              // }}
            />
            <Divider className={classes.divide} variant="middle" />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={9}>
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
          <Box mt={0} pl={0.7} pr={0} mb={0}>
            <AreaGraph
              className={classes.areaGraph}
              graphData={constant?.RatingGraph.graphs}
              mainData={constant?.RatingGraph.inputData.data}
              height={340}
              // width={52}
              AdditonalLegendsStyles={{
                marginTop: 10,
                marginLeft: 40,
              }}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

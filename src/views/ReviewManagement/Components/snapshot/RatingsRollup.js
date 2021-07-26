// import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
// import React from "react";
// import Rating from "components/form/Rating/ReadOnly";
// import ProgressBar from "components/Progress/ProgressBar";
// import RatingBar from "views/ReviewManagement/Components/Layouts/RatingBar";
// import RatingStatus from "views/ReviewManagement/Components/Layouts/RatingStatus";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     height: 220,
//     maxHeight: 230,
//   },
//   TopGrip: {
//     paddingTop: 10,
//   },
//   barGrid: {
//     paddingTop: 15,
//     paddingLeft: 10,
//   },
//   contentGrid: {
//     paddingBottm: 20,
//     paddingTop: 14,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 700,
//   },
// }));
// export default function RatingsRollup({ ratingBreakdownData }) {
//   var i = 10;
//   const classes = useStyles();

//   return (
//     <Grid xs={12} className={classes.root}>
//       <Grid
//         xs={12}
//         item
//         direction="row"
//         container
//         alignItems="center"
//         justify="center"
//         className={classes.barGrid}
//       >
//         {ratingBreakdownData?.ratingCategory?.map((items) => (
//           <Grid
//             item
//             xs={3}
//             sm={3}
//             md={3}
//             container
//             alignItems="center"
//             justify="center"
//           >
//             <RatingStatus
//               value={items?.value}
//               color={items?.color}
//               label={items?.label}
//             />
//           </Grid>
//         ))}
//       </Grid>
//       <Grid
//         item
//         direction="column"
//         container
//         xs={12}
//         className={classes.contentGrid}
//       >
//         {ratingBreakdownData?.ratingBreakdown?.map((items) => (
//           <RatingBar
//             starValue={items?.value}
//             progressValue={items?.percentage}
//             percentageValue={items?.percentage}
//             numberValue={items?.count}
//           />
//         ))}
//       </Grid>
//       {(ratingBreakdownData?.ratingCategory == null ||
//         ratingBreakdownData?.ratingBreakdown == null) && (
//         <Box
//           flexWrap="wrap"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Typography className={classes.title}> No Records Found</Typography>
//         </Box>
//       )}
//     </Grid>
//   );
// }

import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Rating from "components/form/Rating/ReadOnly";
import RollUpProgress from "./RollUpProgress";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
// import ProgressBar from "components/Progress/ProgressBar";
import RatingBar from "views/ReviewManagement/Components/Layouts/RatingBar";
import RatingStatus from "views/ReviewManagement/Components/Layouts/RatingStatus";
import { CenterFocusStrong } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    height: 160,
<<<<<<< HEAD
=======
    // width: "388px",
    // height: "248px",
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
    // height: 220,
    // maxHeight: 230,
  },
  TopGrip: {
    paddingTop: 10,
  },
  barGrid: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  contentGrid: {
    // paddingBottm: 20,
    // paddingTop: 14,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    display: "block",
    justifyContent: "center",
    marginRight: "36px",
  },
  indexing: {
    display: "flex",
    alignItems: "center",
  },
  percent: {
    color: "#8f95a3",
    marginLeft: "5px",
  },
}));
export default function RatingsRollup({ ratingBreakdownData }) {
  var i = 10;
  const classes = useStyles();
  const [completedFirst, setCompletedFirst] = useState(0);
  const [completedSecond, setCompletedSecond] = useState(0);
  const [completedThird, setCompletedThird] = useState(0);
  const [completedForth, setCompletedForth] = useState(0);
  const [completedFifth, setCompletedFifth] = useState(0);

  useEffect(() => {
    setInterval(() => setCompletedFirst(60), 2000);
  }, []);

  useEffect(() => {
    setInterval(() => setCompletedSecond(44), 2000);
  }, []);

  useEffect(() => {
    setInterval(() => setCompletedThird(38), 2000);
  }, []);
  useEffect(() => {
    setInterval(() => setCompletedForth(30), 2000);
  }, []);
  useEffect(() => {
    setInterval(() => setCompletedFifth(50), 2000);
  }, []);

  return (
    <Grid xs={12} className={classes.root}>
      <Grid
        xs={12}
        item
        direction="row"
        container
        alignItems="center"
        justify="center"
        className={classes.barGrid}
      >
        {ratingBreakdownData?.ratingCategory?.map((items) => (
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            container
            alignItems="center"
            justify="center"
          >
            <RatingStatus
              value={items?.value}
              color={items?.color}
              label={items?.label}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        direction="column"
        container
        xs={12}
        className={classes.contentGrid}
      >
        {ratingBreakdownData?.ratingBreakdown?.map((items) => (
          <RatingBar
            starValue={items?.value}
            progressValue={items?.percentage}
            percentageValue={items?.percentage}
            numberValue={items?.count}
          />
        ))}
      </Grid>
      {(ratingBreakdownData?.ratingCategory == null ||
        ratingBreakdownData?.ratingBreakdown == null) && (
        <Box
          flexWrap="wrap"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography className={classes.title}>
            {/* No Records Found */}
            <ul listStyleType="none">
              <li className={classes.indexing}>
                5
                <StarIcon
                  style={{
                    color: "#21897b",
                    fontSize: "large",
                    marginLeft: "2px",
                  }}
                />
                <RollUpProgress
                  bgcolor={"#21897b"}
                  completed={completedFirst}
                />
                20<span className={classes.percent}>(50.00%)</span>
              </li>
              <li className={classes.indexing}>
                4
                <StarIcon
                  style={{
                    color: "#7bb42d",
                    fontSize: "large",
                    marginLeft: "2px",
                  }}
                />
                <RollUpProgress
                  bgcolor={"#7bb42d"}
                  completed={completedSecond}
                />
                14 <span className={classes.percent}>(34.33%)</span>
              </li>
              <li className={classes.indexing}>
                3
                <StarIcon
                  style={{
                    color: "#fda844",
                    fontSize: "large",
                    marginLeft: "2px",
                  }}
                />
                <RollUpProgress
                  bgcolor={"#fda844"}
                  completed={completedThird}
                />
                13<span className={classes.percent}>(31.75%)</span>
              </li>
              <li className={classes.indexing}>
                2
                <StarIcon
                  style={{
                    color: "#e2652e",
                    fontSize: "large",
                    marginLeft: "2px",
                  }}
                />
                <RollUpProgress
                  bgcolor={"#e2652e"}
                  completed={completedForth}
                />
                10<span className={classes.percent}>(24.89%)</span>
              </li>
              <li className={classes.indexing}>
                1
                <StarIcon
                  style={{
                    color: "#9f2629",
                    fontSize: "large",
                    marginLeft: "2px",
                  }}
                />
                <RollUpProgress
                  bgcolor={"#9f2629"}
                  completed={completedFifth}
                />
                14<span className={classes.percent}>(36.48%)</span>
              </li>
            </ul>
          </Typography>
        </Box>
      )}
    </Grid>
  );
}

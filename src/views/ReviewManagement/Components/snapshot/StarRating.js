// import { Grid, Typography, makeStyles } from "@material-ui/core";
// import React from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
// // import Progress from "components/Progress/CircularProgress";
// const useStyles = makeStyles((theme) => ({
//   paper: {},
//   root: {
//     height: 220,
//     maxHeight: 230,
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//   },
//   percentGrid: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 30,
//     flexGrow: 1,
//   },
//   reviewGrid: {
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//     paddingLeft: 40,
//     paddingRight: 10,
//     paddingTop: 30,
//     paddingBottom: 30,
//   },
//   filterTitle: {
//     fontSize: 14,
//     fontWeight: "700",
//   },
//   filterChild: {
//     fontSize: 14,
//     fontWeight: "500",
//   },
// }));
// export default function StarRating({ StarRatingData }) {
//   const classes = useStyles();
//   var i = 10;
//   return (
//     <Grid xs={12} className={classes.root}>
//       <Grid item alignItems="center" container className={classes.percentGrid}>
//         <Grid item xs={6}>
//           {/* <Progress
//             data={StarRatingData?.percentage || 0}
//             innerCircleValue={StarRatingData?.average || 0}
//             size={60}
//           /> */}
//         </Grid>
//         <Grid item xs={6}>
//           <Typography className={classes.filterTitle}>
//             {" "}
//             Overall Rating
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid item container className={classes.reviewGrid}>
//         <Grid item xs={5}>
//           <Typography className={classes.filterTitle}>
//             {StarRatingData?.count || 0}
//           </Typography>
//         </Grid>
//         <Grid item xs={7}>
//           <Typography className={classes.filterTitle}>
//             {" "}
//             Reviews Received
//           </Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

//
import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {},
  root: {
    display: "flex",
    height: 220,
    maxHeight: 230,
    backgroundColor: "#fff",
    borderRadius: "10px",
    paddingLeft: 10,
    paddingRight: 10,
  },
  percent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  percentage: {
    fontSize: 30,
    color: "#e2e2e2",
    fontWeight: 800,
  },
  rated: {
    fontSize: 50,
    color: "#c2302a",
    fontWeight: 800,
    marginTop: "26px",
    paddingBottom: "36px",
  },
  overAllRating: {
    color: "#2b3b5c",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: "10px",
    paddingRight: "20px",
    // display: "flex",
  },
  reviews: {
    color: "#2b3b5c",
    fontSize: 12,
    fontWeight: 800,
  },
  progressBar: {
    // backgroundColor: "red",
    color: "#0fa9de",
    // transform: "rotate(180deg)",
  },
  rate: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#8f95a3",
    position: "relative",
    top: "64px",
    left: "12px",
  },
  divider: {
    marginTop: "40px",
    height: "160px",
  },
}));

export default function StarRating({ StarRatingData }) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 0 ? 130 : prevProgress));
    }, 700);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid xs={12} className={classes.root}>
      <Grid xs={8} className={classes.percent}>
        <Typography className={classes.percentage}>
          <Typography className={classes.rate}>3.75</Typography>
          <CircularProgress
            variant="determinate"
            value={progress}
            size="5.5rem"
            className={classes.progressBar}
          />
        </Typography>
        <Typography className={classes.overAllRating}>
          {" "}
          OVERALL RATING
        </Typography>
      </Grid>
      <Divider
        className={classes.divider}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <Grid xs={4} className={classes.rating}>
        <Typography className={classes.rated}>14</Typography>
        <Typography className={classes.reviews}> REVIEWS RECEIVED</Typography>
      </Grid>
    </Grid>
  );
}

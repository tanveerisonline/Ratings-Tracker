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
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {},
  root: {
    height: 160,
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "10px",
    paddingLeft: 10,
    paddingRight: 10,
  },
  percent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: 30,
    color: "#e2e2e2",
    fontWeight: 800,
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  rated: {
    fontSize: "48px",
    color: "#c2302a",
    fontWeight: 800,
    marginBottom: "15px",
  },
  overAllRating: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: "10px",
  },
  reviews: {
    color: "#2f3f5f",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 10,
  },
  rate: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#8f95a3",
  },
  progressBar: {
    color: "#0fa9de",
    marginBottom: "10px",
    // color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    // backgroundColor: "red",
    // fontWeight: 800,
    // transform: "rotate(180deg)",
  },
  divider: {
    backgroundColor: "lightgray",
    marginTop: "5px",
    height: "150px",
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

  function CircularProgressWithLabel() {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={progress}
          size="5rem"
          className={classes.progressBar}
          thickness="3.5"
          background="gray"
        />
        <Box
          top={0}
          left={0}
          bottom={10}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            // color="textSecondary"
            className={classes.rate}
          >
            3.75
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Grid xs={12} className={classes.root}>
      <Grid xs={8} className={classes.percent}>
        <CircularProgressWithLabel />
        <Typography className={classes.overAllRating}>
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

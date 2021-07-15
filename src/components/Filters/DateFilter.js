// // import "date-fns";
// import React from "react";
// // import Stack from "@material-ui/core/Stack";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import { Button, Typography } from "@material-ui/core";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
// const useStyles = makeStyles((theme) => ({
// root: {
//   textDecoration: "none",
//   "&::after": {
//     textDecoration: "none",
//   },
// },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     backgroundColor: "#fff",
//     marginRight: theme.spacing(1),
//     borderRadius: "5px",
//     height: 40,
//     width: 200,
//     "&::after": {
//       textDecoration: "none",
//     },
//   },
//   btn: {
//     fontSize: 12,
//     color: "#fff",
//     marginTop: "10px",
//     // backgroundColor: "#8f95a3",
//     // "&:hover": {
//     //   backgroundColor: "#777b89",
//     // },
//   },
//   title: {
//     margin: 10,
//     fontSize: "12px",
//   },
//   // input: {
//   //   width: "160px",
//   //   backgroundColor: "#fff",
//   //   borderRadius: "10px",
//   //   fontSize: "12px",
//   // },'@progress/kendo-react-dateinputs'
// }));

// export default function DateFilter() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState([null, null]);

//   return (
//     <Grid item xs={12} className="date-filter">
//       <h4>SHOW RATINGS FOR:</h4>
//       <TextField
//         id="date"
//         type="date"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <Typography className={classes.title}>TO</Typography>
//       <TextField
//         id="date"
//         type="date"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <Button
//         className={classes.btn}
//         onClick={() => console.log("you clicked APPLY button")}
//         type="submit"
//         color="primary"
//         variant="contained"
//         endIcon={<KeyboardArrowRightIcon />}
//       >
//         APPLY
//       </Button>
//     </Grid>
//   );
// }
import "date-fns";
import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Typography, Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { ArrowLeft, CenterFocusStrong } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "yellow",
    marginLeft: 50,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    width: 220,
    height: 50,
    borderRadius: 14,
    background: "#fff",
    alignItems: "normal",
    // paddingTop: 10,
  },

  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  to: {
    marginLeft: 20,
    fontSize: 13,
    color: "#383e4c",
    fontWeight: 600,
    paddingTop: 12,
    paddingBottom: 12,
    alignContent: "left",
  },
  apply: {
    marginLeft: 10,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  btn: {
    width: "35%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#8f95a3",
    marginTop: 15,
    borderRadius: 10,
  },
}));

export default function DateFilter() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      {/* <Container className={classes.root}> */}
      <Typography className={classes.heading}>SHOW RATINGS FOR:</Typography>

      <TextField
        // className={classes.dateField}
        id="date"
        type="date"
        InputProps={{
          disableUnderline: true,
        }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Typography className={classes.to}>TO</Typography>

      <TextField
        id="date"
        type="date"
        InputProps={{
          disableUnderline: true,
        }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        variant="contained"
        marginTop="10"
        color="primary"
        endIcon={<KeyboardArrowRightIcon />}
      >
        <Typography className={classes.apply}>APPLY</Typography>
      </Button>
      {/* </Container> */}
    </Grid>
  );
}

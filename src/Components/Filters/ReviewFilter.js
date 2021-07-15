import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // button: {
  //   display: "block",
  //   marginTop: theme.spacing(2),
  // },
  formControl: {
    // margin: theme.spacing(1),
    // backgroundColor: "red",
    borderRadius: 14,
    backgroundColor: "#fff",
    width: 220,
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
}));

export default function ReviewFilter() {
  const classes = useStyles();
  const [review, setReview] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid className="review-filter" item xs={12}>
      {/* <Container> */}
      <Typography className={classes.heading}>REVIEW SITES:</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">All</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={review}
          onChange={handleChange}
        >
          <MenuItem value={1}>Apartments</MenuItem>
          <MenuItem value={2}>Apartment Guide</MenuItem>
          <MenuItem value={3}>ApartmentRatings</MenuItem>
          <MenuItem value={4}>Facebook</MenuItem>
          <MenuItem value={5}>Google</MenuItem>
          <MenuItem value={6}>Modern Message</MenuItem>
          <MenuItem value={7}>Rent</MenuItem>
          <MenuItem value={8}>Yellow Pages</MenuItem>
          <MenuItem value={9}>Yelp</MenuItem>
        </Select>
      </FormControl>
      {/* </Container> */}
    </Grid>
  );
}

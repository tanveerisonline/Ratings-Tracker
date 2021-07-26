import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import "./ReviewFilter.css";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "red",
    marginLeft: 45,
  },
  formControl: {
    // margin: theme.spacing(1),
    display: "inline-flex",
    justifyContent: "center",
    height: 45,
    paddingLeft: "15px",
    borderRadius: 14,
    backgroundColor: "#fff",
    width: 200,
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  select: {
    marginTop: "5px",
  },
}));

export default function ReviewFilter() {
  const classes = useStyles();
  const [review, setReview] = React.useState("");
  // const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setReview(event.target.value);
  };
  return (
    <Grid className={classes.root} item xs={12}>
      <Typography className={classes.heading}>REVIEW SITES:</Typography>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.selectAll}
          value={review}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="" disabled>
            All
          </MenuItem>
          <Divider />
          <MenuItem className={classes.select} value={1}>
            <span className="apartments"></span>
            <span>Apartments</span>
          </MenuItem>
          <Divider />
          <MenuItem value={2}>
            <span className="apartment-guide"></span>
            <span>Apartment Guide</span>
          </MenuItem>
          <Divider />
          <MenuItem value={3}>
            <span className="apartment-ratings"></span>
            <span>ApartmentRatings</span>
          </MenuItem>
          <Divider />
          <MenuItem value={4}>
            <span className="facebook"></span>
            <span>Facebook</span>
          </MenuItem>
          <Divider />
          <MenuItem value={5}>
            <span className="google"></span>
            <span>Google</span>
          </MenuItem>{" "}
          <Divider />
          <MenuItem value={6}>
            <span className="modern-message"></span>
            <span>Modern Message</span>
          </MenuItem>{" "}
          <Divider />
          <MenuItem value={7}>
            <span className="rent"></span>
            <span>Rent</span>
          </MenuItem>{" "}
          <Divider />
          <MenuItem value={8}>
            <span className="yellow-pages"></span>
            <span>Yellow Pages</span>
          </MenuItem>{" "}
          <Divider />
          <MenuItem value={9}>
            <span className="yelp"></span>
            <span>Yelp</span>
          </MenuItem>{" "}
          {/* <Divider /> */}
        </Select>
      </FormControl>
    </Grid>
  );
}

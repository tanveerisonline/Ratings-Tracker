import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FilterImage2 from "./FilterImage2.png";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Filter.css";
import FilterTitle from "./Filters/FilterTitle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  // filter: {
  //   marginTop: "76px",
  // width: "301px",
  // height: "70px",
  // overflowY: "scroll",
  // },

  root: {
    textDecoration: "none",
  },
  Dbtn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    marginLeft: 45,
    background: "#0da9de",
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  downBtn: {
    marginLeft: 2,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
    // "&:hover": {
    //   backgroundColor: "#777b89",
    // },
  },
  divider: {
    backgroundColor: "#6b6d82",
    width: "78%",
    marginLeft: "45px",
    marginTop: "30px",
  },
  apply: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  btn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#7bb42d",
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 45,
  },
  filterImg: {
    height: 20,
    width: 20,
    // border: "1px solid red",
  },
<<<<<<< HEAD
=======
  resetMain: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    // fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 45,
  },
  resetText: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
  formControl: {
    // margin: theme.spacing(1),
    // backgroundColor: "red",
    display: "inline-flex",
    justifyContent: "center",
    // alignItems: "center",
    height: 45,
    paddingLeft: "15px",
    borderRadius: 14,
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 45,
  },
  rightIcon: {
<<<<<<< HEAD
    marginLeft:12
=======
    marginLeft: 12,
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
  },
}));
const Filter = () => {
  const classes = useStyles();
  const [review, setReview] = React.useState("");
  const [open, setOpen] = React.useState(false);
<<<<<<< HEAD

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

=======
  const [filterData, setFilterData] = React.useState({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = filterData;
  const handleStartDateChange = (date) => {
    setFilterData({ ...filterData, startDate: date });
  };
  const handleEndDateChange = (date) => {
    setFilterData({ ...filterData, endDate: date });
  };
  const handleChange = (event) => {
    setReview(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
  const handleOpen = () => {
    setOpen(true);
  };
  return (
<<<<<<< HEAD
    <Grid container className="filter">
=======
<<<<<<< HEAD
    <Grid container className="filter">
      <FilterTitle />
      <DateFilter />
=======
    <Grid container className={classes.filter}>
>>>>>>> af10f361d809c105208d790f73c57a10736362e8
      <FilterTitle />
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        handleChange={handleStartDateChange}
        handleChange2={handleEndDateChange}
      />
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
      <Divider className={classes.divider} variant="middle" />
      <ReviewFilter />
      <Divider className={classes.divider} variant="middle" />
      <PortfolioFilter />
      <Divider className={classes.divider} variant="middle" />
      <GroupFilter />
      {/* / */}
      <Button
        className={classes.btn}
<<<<<<< HEAD
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        variant="contained"
        marginTop="10"
        color="primary"
=======
        onClick={() => console.log(filterData)}
        type="submit"
        variant="contained"
        marginTop="10"
        color="secondary"
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
        startIcon={
          <img src={FilterImage2} alt="Img" className={classes.filterImg} />
        }
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.apply}>APPLY FILTER</Typography>
      </Button>
<<<<<<< HEAD
=======
      <Button
        className={classes.resetMain}
        onClick={() => console.log(filterData)}
        type="submit"
        variant="contained"
        marginTop="10"
        color="primary"
        // startIcon={
        //   <img src={FilterImage2} alt="Img" className={classes.filterImg} />
        // }
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.resetText}>RESET</Typography>
      </Button>
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
      {/* / */}
      <Button
        className={classes.Dbtn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        color="main"
        variant="contained"
        startIcon={<SystemUpdateAltOutlinedIcon />}
      >
        <Typography className={classes.downBtn}>DOWNLOAD DATA</Typography>
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          value={review}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="" disabled>
            All
          </MenuItem>
<<<<<<< HEAD
          <MenuItem value={1}>Apartments</MenuItem>
          <MenuItem value={2}>Apartment Guide</MenuItem>
          <MenuItem value={3}>ApartmentRatings</MenuItem>
          <MenuItem value={4}>Facebook</MenuItem>
          <MenuItem value={5}>Google</MenuItem>
          <MenuItem value={6}>Modern Message</MenuItem>
          <MenuItem value={7}>Rent</MenuItem>
          <MenuItem value={8}>Yellow Pages</MenuItem>
          <MenuItem value={9}>Yelp</MenuItem>
=======
          <MenuItem value={1}>
            <span className="apartments"></span>
            <span>Apartments</span>
          </MenuItem>
          <MenuItem value={2}>
            <span className="apartment-guide"></span>
            <span>Apartment Guide</span>
          </MenuItem>
          <MenuItem value={3}>
            <span className="apartment-ratings"></span>
            <span>ApartmentRatings</span>
          </MenuItem>
          <MenuItem value={4}>
            <span className="facebook"></span>
            <span>Facebook</span>
          </MenuItem>
          <MenuItem value={5}>
            <span className="google"></span>
            <span>Google</span>
          </MenuItem>
          <MenuItem value={6}>
            <span className="modern-message"></span>
            <span>Modern Message</span>
          </MenuItem>
          <MenuItem value={7}>
            <span className="rent"></span>
            <span>Rent</span>
          </MenuItem>
          <MenuItem value={8}>
            <span className="yellow-pages"></span>
            <span>Yellow Pages</span>
          </MenuItem>
          <MenuItem value={9}>
            <span className="yelp"></span>
            <span>Yelp</span>
          </MenuItem>
>>>>>>> 0c25c27d8a678eb6ed4d5d5c2425947df4b9c6a0
        </Select>
      </FormControl>
    </Grid>
  );
};
export default Filter;

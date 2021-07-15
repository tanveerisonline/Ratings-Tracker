import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  // button: {
  //   display: "block",
  //   marginTop: theme.spacing(2),
  // },
  root: {
    // backgroundColor: "gray",
    marginLeft: 50,
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
}));
export default function GroupFilter() {
  const [value, setValue] = React.useState("months");
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid className={classes.root} item xs={12}>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">GROUP BY:</FormLabel> */}
        <Typography className={classes.heading}>GROUP BY:</Typography>
        {/* <Typography>Gender</Typography> */}
        <RadioGroup
          aria-label="group"
          name="group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="months" control={<Radio />} label="Months" />
          <FormControlLabel
            value="quarters"
            control={<Radio />}
            label="Quarters"
          />
          <FormControlLabel value="years" control={<Radio />} label="Years" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

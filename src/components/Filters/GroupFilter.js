import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

export default function GroupFilter() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid className="group-filter" item xs={12}>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">GROUP BY:</FormLabel> */}
        <h4>GROUP BY:</h4>
        {/* <Typography>Gender</Typography> */}
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Months" />
          <FormControlLabel value="male" control={<Radio />} label="Quarters" />
          <FormControlLabel value="other" control={<Radio />} label="Years" />
          {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        /> */}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

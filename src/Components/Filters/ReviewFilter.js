import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ReviewFilter() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        REVIEW SITES:
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">All</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
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
    </div>
  );
}

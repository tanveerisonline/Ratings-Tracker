import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    width: "160px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    fontSize: "12px",
  },

  // .datepicker-1::-webkit-input-placeholder{
  //   font-size: 50px;
  // }
  "input::-webkitplaceholder": {
    fontSize: "16px",
  },
}));

export default function DateFilter() {
  const classes = useStyles();

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState([null, null]);
  // new Date("2014-08-18T21:11:54")
  // );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="date-filter">
      <h4>SHOW RATINGS FOR:</h4>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            className={classes.input}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            placeholder="MM/DD/YYYY"
            margin="normal"
            id="date-picker-inline"
            // label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          TO
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            // label="Date picker dialog"
            format="MM/dd/yyyy"
            placeholder="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          {/* <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /> */}
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

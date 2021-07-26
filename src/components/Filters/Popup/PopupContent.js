import React from "react";
import PostData from "./PopupData";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import "./Popup.css";
import { makeStyles } from "@material-ui/core/styles";

// console.log(PostData); 
const useStyles = makeStyles({
  root: {
    height: "26px",
    width: "26px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  PopupContentMain: {
    height: "100vh",
    columns: "3 auto",
    overflowY: "scroll",
  },
});
const PopupContent = () => {
  //   const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState(false);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // setChecked(event.target.checked);
  };
  const classes = useStyles();
  return (
    <div className={classes.PopupContentMain}>
      {PostData?.map((item) => (
        <Grid item>
          <Checkbox
            className={classes.root}
            checked={state.value}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {item.name}
        </Grid>
      ))}
    </div>
  );
};
export default PopupContent;

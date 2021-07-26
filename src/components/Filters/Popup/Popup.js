import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
} from "@material-ui/core";
import PopupContent from "./PopupContent";
import { Grid } from "@material-ui/core";
import PopupSidenav from "./PopupSidenav";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Popup.css";
// const useStyles = makeStyles((theme) => ({
//   dialogWrapper: {},
// }));
const Popup = (props) => {
  const { close } = props;

  return (
    <Grid container xs={12}>
      <Grid className="popup-main" item xs={12}>
        <DialogTitle>
          <span>
            <i className="fas fa-sort-amount-up-alt"></i>
          </span>
          <span className="popup-title">
            Filter by Portfolio / Distribution
          </span>
        </DialogTitle>
        <span className="popup-select"># PROPERTIES SELECTED</span>
        <span className="popup-close">
          {close ? (
            <IconButton
              aria-label="close"
              // className={classes.closeButton}
              onClick={close}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </span>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={3}>
          <PopupSidenav />
        </Grid>
        <Grid item xs={9}>
          <DialogContent>
            <PopupContent />
            {/* {children} */}
          </DialogContent>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Popup;

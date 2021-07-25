import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
//
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
//
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "orange",
    marginLeft: 45,
  },
  textField: {
    // marginTop: 120,
    // marginBottom: 20,
    // display: "block",
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: "15px",
    color: "red",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    width: 50,
    height: 45,
  },
  filBtn: {
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 200,
  //   color: "red",
  // },

  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  title: {
    marginLeft: 20,
    fontSize: 13,
    color: "#383e4c",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "75%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,

    // width: "64%",
    // height: "40px",
    // color: "#fff",
    // display: "flex",
    // fontSize: "12px",
    // marginLeft: 50,
    // background: "#0da9de",
    // marginTop: 15,
    // borderRadius: 10,
  },
  region: {
    display: "flex",
    flexDirection: "row",
  },
}));
// /
const styles = (theme) => ({
  root: {
    margin: 0,
    // minWidth: "500px",
    // width: "1083px",
    // height: "624px",
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    // maxWidth: "500px",
    backgroundColor: "red",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
// const Dialog = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(Dialog);

// /

const PortfolioFilter = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
    }
  };
  // /
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // /
  return (
    <Grid item xs={12} className={classes.root}>
      {/* / */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Filter by Portfolio / Distribution
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      {/* / */}
      <Typography className={classes.heading}>MY PORTFOLIO:</Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="portfolio-form"
      >
        <Grid className={classes.region}>
          <TextField
            className={classes.textField}
            onChange={(e) => setTitle(e.target.value)}
            // label="378"
            placeholder="378"
            // variant="outlined"
            color="secondary"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Typography className={classes.title}>East Region</Typography>
        </Grid>
        <Button
          className={classes.btn}
          // onClick={() => console.log("you clicked button")}
          onClick={handleClickOpen}
          type="submit"
          color="primary"
          variant="contained"
          // marginTop="10"
          endIcon={<KeyboardArrowRightIcon className={classes.arrow} />}
        >
          <Typography className={classes.filBtn}>FILTER PROPERTIES</Typography>
        </Button>
      </form>
    </Grid>
  );
};

export default PortfolioFilter;

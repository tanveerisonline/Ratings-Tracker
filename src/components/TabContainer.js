import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Graph1 from "./Graphs/Graph1";
import Graph2 from "./Graphs/Graph2";
import Graph3 from "./Graphs/Graph3";
import Graph4 from "./Graphs/Graph4";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: "100%",
    // height: "100%",
    marginLeft: "25px",
    marginTop: "25px",
  },
  tabs: {
    backgroundColor: "#e9e9ec",
  },
  tabItem: {
    borderRadius: "10px 10px 0px 0px",
    color: "white",
    fontWeight: "600",
    backgroundColor: "#919aab",
    "&.Mui-selected": {
      backgroundColor: "white",
      color: "#c93e46",
    },
  },
}));

export default function TabContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            background: "none",
          },
        }}
      >
        <Tab className={classes.tabItem} label="SNAPSHOT" {...a11yProps(0)} />
        <Tab className={classes.tabItem} label="BENCHMARK" {...a11yProps(1)} />
      </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
        {/* <div className="tab">FIRST TAB</div> */}
        <Grid container style={{ minHeight: 200 }}>
          <Grid item xs={4}>
            <Graph1 />
          </Grid>
          <Grid item xs={4}>
            <Graph2 />
          </Grid>
          <Grid item xs={4}>
            <Graph3 />
          </Grid>
          <Grid item xs={12}>
            <Graph4 />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        This is second tab
      </TabPanel>
    </div>
  );
}
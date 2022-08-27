import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Common from "../Tabs/Common";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
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
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: "2%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tablayout() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="off"
        indicatorColor="primary"
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Text" aria-label="Text" {...a11yProps(0)} />
        <Tab label="Button" aria-label="Button" {...a11yProps(1)} />
        <Tab label="Widget" aria-label="Widget" {...a11yProps(2)} />
        <Tab label="Layout" aria-label="Layout" {...a11yProps(3)} />
        <Tab label="Container" aria-label="Container" {...a11yProps(4)} />
        <Tab label="Helper" aria-label="Helper" {...a11yProps(5)} />
        <Tab label="Google" aria-label="Google" {...a11yProps(6)} />
        <Tab label="Legacy" aria-label="Legacy" {...a11yProps(7)} />
        <Tab label="Others" aria-label="Others" {...a11yProps(8)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Common dependencyType="Text" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Common dependencyType="Button" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Common dependencyType="Widget" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Common dependencyType="Layout" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Common dependencyType="Container" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Common dependencyType="Helper" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Common dependencyType="Google" />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Common dependencyType="Legacy" />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Common dependencyType="Others" />
      </TabPanel>
    </div>
  );
}

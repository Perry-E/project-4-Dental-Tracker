import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BarChart from "./BarChart";
import { LineChart } from "./LineChart";
import PieChart from "./PieChart";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={{marginTop:"-200px"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Commission (Bar Chart)" {...a11yProps(0)} />
          <Tab label="Commission (Line Chart)" {...a11yProps(1)} />
          <Tab label="Procedures Per Category" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          className="chart-container my-5"
        >
          <BarChart />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="chart-container my-5">
          <LineChart />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="chart-container my-5">
          <PieChart />
        </div>
      </TabPanel>
    </Box>
  );
}

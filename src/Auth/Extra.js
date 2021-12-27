import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Login from "./Login";
import Reg from "./Reg";
import { useState } from "react";
const paperstyle = { width: 178, margin: "0 auto", height: 0 };
function Extra() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box>
      <Box>
        <Paper style={paperstyle}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sin In" />
            <Tab label="Sign Up" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Reg />
        </TabPanel>
      </Box>
    </Box>
  );
}
export default Extra;

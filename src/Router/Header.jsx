import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { ROUTES } from "./constants";

export const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" to={ROUTES.HOME} component={Link} />
            <Tab label="Chats" to={ROUTES.CHAT} component={Link} />
            <Tab label="Profile" to={ROUTES.PROFILE} component={Link} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

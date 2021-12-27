import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { margin } from "@mui/system";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ marginLeft: "10px" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Demo
          </Typography>
          <Avatar>
            <img style={{ width: "40px" }} src="/img.png" alt="" />
          </Avatar>
          <Typography style={{ margin: "10px" }}> Aftab</Typography>
          <Button style={{ right: -20 }} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

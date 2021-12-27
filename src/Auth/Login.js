import {
  FacebookSharp,
  GitHub,
  Google,
  LockOutlined,
} from "@mui/icons-material";

import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const paperstyle = {
  padding: 20,
  height: 600,
  width: 450,
  margin: "0 auto 0 auto",
};
function Login({ handleChange }) {
  function handle() {
    console.log("hancle function call");
  }
  return (
    <Grid>
      <Paper style={paperstyle} elevation={10}>
        <Grid align="center">
          <Avatar style={{ marginTop: "50px", background: "cornflowerblue" }}>
            <LockOutlined />
          </Avatar>
          <h1> Sign In</h1>
          <br />
          <br />
          <TextField
            variant="outlined"
            label="UserName"
            type="text"
            placeholder="Enter UserName"
            fullWidth
          />
          <br />
          <br />
        </Grid>
        <TextField
          type="password"
          label="Password"
          placeholder="Enter Password"
          fullWidth
        />
        <br />
        <Checkbox {...label} defaultChecked />
        Remember Me <br />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ height: "50px" }}
        >
          Submit
        </Button>
        <br />
        <Typography style={{ margin: "10px auto" }}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        {/* <Typography>
          Do you have an account ?
          <Link
            onClick={() => {
              handleChange("event", 1);
            }}
            href="#"
          >
            SignUp
          </Link>
        </Typography> */}
        <Typography align="center">Or Sign Up using</Typography>
        <Grid style={{ margin: "2px" }} align="center">
          <Link href="#">
            <FacebookSharp
              style={{
                margin: "2px",
                color: "blue",
                height: "60px",
                width: "40px",
              }}
            />
          </Link>
          <Link href="#">
            <Google
              style={{
                margin: "2px",
                color: "Red",
                height: "60px",
                width: "40px",
              }}
            />
          </Link>
          <Link href="#">
            <GitHub
              style={{
                margin: "2px",
                color: "Black",
                height: "60px",
                width: "40px",
              }}
            />
          </Link>
        </Grid>
        <Typography align="center">
          Do you have an account ?
          <Link onClick={handle} href="/Reg">
            SignUp
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
export default Login;

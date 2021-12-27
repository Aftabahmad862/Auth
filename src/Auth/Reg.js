import "../App.css";
import { Button, Container, Grid, Input, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
function Reg() {
  function submit(e) {
    e.preventDefault();
  }
  const paperstyle = {
    padding: "50px 20px 20px 20px",
    backgroundColor: "#fefefe",
    height: 600,
    width: 450,
    margin: "0 auto",
  };

  return (
    <Container>
      <Grid>
        <Paper elevation={10} style={paperstyle}>
          <h1 className="App">Registration Form</h1>

          <form action="submit">
            <Typography variant="h6" color="secondary">
              Name
            </Typography>
            <Input />
            <br />
            <br />
            <Typography variant="h6" color="secondary">
              {" "}
              Registration
            </Typography>
            <Input />
            <br />
            <br />
            <Typography variant="h6" color="secondary">
              Mobile Phone
            </Typography>
            <Input />
            <br />
            <br />
            <Typography variant="h6" color="secondary">
              Email
            </Typography>
            <Input type="email" />
            <br />
            <br />
            <Typography variant="h6" color="secondary">
              Date_of_Birth
            </Typography>
            <br />
            <Input type="date" />
            <br />
            <br />
            <Button
              fullWidth
              onClick={submit}
              variant="contained"
              style={{ height: "50px" }}
              endIcon={<KeyboardArrowRight />}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Reg;

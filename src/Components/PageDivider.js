import {
  Grid,
  Container,
  Typography,
  Paper,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";

function PageDivider() {
  const paperstyle = {
    padding: "20px 20px 20px 50px",
    backgroundColor: "#fefefe",
    height: 310,
    width: "auto",
    margin: "10px",
  };
  const paperstyle1 = {
    padding: "20px 20px 20px 50px",
    backgroundColor: "#fefefe",
    height: 370,
    width: "auto",
    margin: "10px",
  };

  const paperstyle2 = {
    padding: "20px 20px 20px 50px",
    backgroundColor: "#fefefe",
    height: 200,
    width: 680,
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" margin={2}>
              Abstract
            </Typography>
            <Typography variant="h6" margin={2}>
              Objective
            </Typography>
            <Typography variant="h6" margin={2}>
              Game desigening
            </Typography>
            <Typography variant="h6" margin={2}>
              Methadology
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container>
        <Grid item xs>
          <Paper elevation={10} style={paperstyle}>
            <h1>Abstract</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis!
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper elevation={10} style={paperstyle}>
            <h1>Objective</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis!
            </Typography>
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>

        <Grid item xs>
          <Paper elevation={10} style={paperstyle1}>
            <h1>Game Development</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xl>
          <Paper elevation={10} style={paperstyle2}>
            <h1>Methadology</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <Paper elevation={10} style={paperstyle}>
            <h1>UseCase</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xl>
          <Paper elevation={10} style={paperstyle2}>
            <h1>Game Development and Scripting</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Grid>

        <Divider orientation="vertical" flexItem></Divider>

        <Grid item xs>
          <Paper elevation={10} style={paperstyle}>
            <h1>Summary</h1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis voluptatibus assumenda. Beatae porro minus enim
              pariatur doloribus, in aut reprehenderit tempora impedit
              doloremque eveniet ducimus magni laudantium nam officiis! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
              dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default PageDivider;

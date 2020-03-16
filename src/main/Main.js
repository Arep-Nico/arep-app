import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Grid, Container, CssBaseline, Divider } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputData from '../inputData/InputData';
import TableContent from '../tableContent/TableContent';

const theme = createMuiTheme({
  palette: {
    textPrimary: {
      main: '#fff'
    },
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#fff',
    },
  }
});

const footer = {
  marginTop: 'auto',
  backgroundColor: "#62727b",
  color: "#fff",
  padding: '1%'
}

export class Main extends Component {

  constructor(props) {
    super(props);
    this.ref1 = React.createRef();
    this.update = this.update.bind(this);
  }
  
  update = value => {
    this.ref1.current.update();
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <AppBar position="static">
              <Toolbar >
                <Typography variant="h6">
                  Arep App
              </Typography>
              </Toolbar>
            </AppBar>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={1} />
              <Grid item xs>
                <Grid container>
                  <Grid item xs={12}>
                    <InputData update={this.update} />
                  </Grid>
                  <Grid item xs={12} style={{ height: 8, marginTop: 8, }}>
                    <Divider style={{ backgroundColor: "#62727b" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TableContent ref={this.ref1} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Footer />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

function Footer() {
  return (
    <footer style={footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">Sitio creado para le laboratorio de Patrones Arquitecturales</Typography>
        <Link color="inherit" href="http://patronesarquitecturales.s3-website-us-east-1.amazonaws.com">
          Tutorial
            </Link>
        <Copyright />
      </Container>
    </footer>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "#fff" }} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Arep-Nico">
        Nicolas Cardenas
      </Link>{' '} {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default Main;

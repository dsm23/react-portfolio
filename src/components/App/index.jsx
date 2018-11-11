import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router";

import { Router } from "../../../routing.web";

import ROUTER from "../../constants/router";

import ClippedDrawer from "../ClippedDrawer";
import NavBar from "../NavBar";

import Home from "../pages/Home";
import Wiki from "../pages/Wiki";
import About from "../pages/About";
import Simon from "../pages/Simon";
import Contact from "../pages/Contact";
import Weather from "../pages/Weather";
import Pomodoro from "../pages/Pomodoro";
import TimeStamp from "../pages/TimeStamp";
import Calculator from "../pages/Calculator";
import Experience from "../pages/Experience";
import NoughtsAndCrosses from "../pages/NoughtsAndCrosses";

const theme = createMuiTheme({
  palette: {
    type: "light"
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 12,
    useNextVariants: true
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <>
        <NavBar />
        <ClippedDrawer>
          <Switch>
            <Route exact path={ROUTER.home} component={Home} />
            <Route path={ROUTER.wiki} component={Wiki} />
            <Route path={ROUTER.about} component={About} />
            <Route path={ROUTER.simon} component={Simon} />
            <Route path={ROUTER.contact} component={Contact} />
            <Route path={ROUTER.weather} component={Weather} />
            <Route path={ROUTER.calculator} component={Calculator} />
            <Route path={ROUTER.experience} component={Experience} />
            <Route path={ROUTER.timeStamp} component={TimeStamp} />
            <Route path={ROUTER.pomodoroTimer} component={Pomodoro} />
            <Route
              path={ROUTER.noughtsAndCrosses}
              component={NoughtsAndCrosses}
            />
          </Switch>
        </ClippedDrawer>
      </>
    </Router>
  </MuiThemeProvider>
);

export default App;

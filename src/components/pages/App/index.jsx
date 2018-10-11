import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTER from '../../../constants/router';

import { ClippedDrawer, NavBar } from '../..';

import {
  Home,
  Wiki,
  About,
  Simon,
  Contact,
  Weather,
  Pomodoro,
  TimeStamp,
  Calculator,
  Experience,
  NoughtsAndCrosses,
} from '..';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 12,
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
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
            <Route path={ROUTER.noughtsAndCrosses} component={NoughtsAndCrosses} />
          </Switch>
        </ClippedDrawer>
      </>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;

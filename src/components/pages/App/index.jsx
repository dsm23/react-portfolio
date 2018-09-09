import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import router from '../../../constants/router';

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
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <>
        <NavBar />
        <ClippedDrawer>
          <Switch>
            <Route exact path={router.home} component={Home} />
            <Route path={router.wiki} component={Wiki} />
            <Route path={router.about} component={About} />
            <Route path={router.simon} component={Simon} />
            <Route path={router.contact} component={Contact} />
            <Route path={router.weather} component={Weather} />
            <Route path={router.calculator} component={Calculator} />
            <Route path={router.experience} component={Experience} />
            <Route path={router.timeStamp} component={TimeStamp} />
            <Route path={router.pomodoroTimer} component={Pomodoro} />
            <Route path={router.noughtsAndCrosses} component={NoughtsAndCrosses} />
          </Switch>
        </ClippedDrawer>
      </>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;

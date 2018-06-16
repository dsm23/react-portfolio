import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  ClippedDrawer,
  NavBar,
} from '../../components';

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

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <ClippedDrawer>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/wiki" component={Wiki} />
            <Route path="/about" component={About} />
            <Route path="/simon" component={Simon} />
            <Route path="/contact" component={Contact} />
            <Route path="/weather" component={Weather} />
            <Route path="/pomodoro" component={Pomodoro} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/experience" component={Experience} />
            <Route path="/time-stamp" component={TimeStamp} />
            <Route path="/time-stamp/:id" component={TimeStamp} />
            <Route path="/noughts-and-crosses" component={NoughtsAndCrosses} />
          </React.Fragment>
        </BrowserRouter>
      </ClippedDrawer>
    </MuiThemeProvider>
  );
};

export default App;

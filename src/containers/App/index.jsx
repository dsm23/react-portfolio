import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import {
  ClippedDrawer,
  NavBar,
} from '../../components';

import {
  Home,
  About,
  Contact,
  Calculator,
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
      <ClippedDrawer />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/calculator" component={Calculator} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;

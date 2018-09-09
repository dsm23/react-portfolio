import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import router from '../../constants/router';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const NavBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          David Murdoch
        </Typography>
        <Button color="inherit">PROJECTS</Button>
        <Button component={NavLink} color="inherit" to={router.about}>ABOUT</Button>
        <Button color="inherit">EXPERIENCE</Button>
        <Button component={NavLink} color="inherit" to={router.contact}>CONTACT</Button>
      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    flex: PropTypes.string,
    menuButton: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(NavBar);

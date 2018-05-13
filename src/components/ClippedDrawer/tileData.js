import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import AlarmIcon from '@material-ui/icons/Alarm';
import CloudIcon from '@material-ui/icons/Cloud';
import GamesIcon from '@material-ui/icons/Games';
import GridOnIcon from '@material-ui/icons/GridOn';
import MemoryIcon from '@material-ui/icons/Memory';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import Divider from 'material-ui/Divider';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Collapse from 'material-ui/transitions/Collapse';

export default class DrawerListItems extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button component="a" href="/about">
          <ListItemIcon >
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemIcon >
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component="a" href="/experience">
          <ListItemIcon >
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Projects" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
            <ListItem button component="a" href="/calculator">
              <ListItemIcon >
                <GridOnIcon />
              </ListItemIcon>
              <ListItemText primary="Calculator" />
            </ListItem>
            <ListItem button component="a" >
              <ListItemIcon>
                <CloudIcon />
              </ListItemIcon>
              <ListItemText primary="Weather" />
            </ListItem>
            <ListItem button component="a">
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <ListItemText primary="Noughts and Crosses" />
            </ListItem>
            <ListItem button component="a">
              <ListItemIcon>
                <AlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Pomodoro Timer" />
            </ListItem>
            <ListItem button component="a">
              <ListItemIcon>
                <MemoryIcon />
              </ListItemIcon>
              <ListItemText primary="Simon Game" />
            </ListItem>
            <ListItem button component="a">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Wikipedia Viewer" />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

DrawerListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

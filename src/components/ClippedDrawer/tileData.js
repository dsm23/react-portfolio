import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
import Divider from '@material-ui/core/Divider';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Collapse from '@material-ui/core/Collapse';

import router from '../../constants/router';

const arrPersonDetails = [
  {
    label: 'About',
    href: router.about,
    icon: <PersonIcon />,
  },
  {
    label: 'Contact',
    href: router.contact,
    icon: <MailIcon />,
  },
  {
    label: 'Experience',
    href: router.experience,
    icon: <WorkIcon />,
  },
];

const arrProjects = [
  {
    label: 'Calculator',
    href: router.calculator,
    icon: <GridOnIcon />,
  },
  {
    label: 'Weather',
    href: router.weather,
    icon: <CloudIcon />,
  },
  {
    label: 'Noughts And Crosses',
    href: router.noughtsAndCrosses,
    icon: <GamesIcon />,
  },
  {
    label: 'Pomodoro Timer',
    href: router.pomodoroTimer,
    icon: <AlarmIcon />,
  },
  {
    label: 'Simon Game',
    href: router.simon,
    icon: <MemoryIcon />,
  },
  {
    label: 'Wikipedia Viewer',
    href: router.wiki,
    icon: <SearchIcon />,
  },
];

export default class DrawerListItems extends React.Component {
  state = { open: false };

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <>
        {
          arrPersonDetails.map(
            elem => (
              <ListItem button component={NavLink} to={elem.href} key={`${elem.label}-${elem.href}`}>
                <ListItemIcon>
                  {elem.icon}
                </ListItemIcon>
                <ListItemText primary={elem.label} />
              </ListItem>
            ),
          )
        }
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Projects" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
            {
              arrProjects.map(
                elem => (
                  <ListItem button component={NavLink} to={elem.href} key={`${elem.label}-${elem.href}`}>
                    <ListItemIcon>
                      {elem.icon}
                    </ListItemIcon>
                    <ListItemText primary={elem.label} />
                  </ListItem>
                ),
              )
            }
          </List>
        </Collapse>
      </>
    );
  }
}

DrawerListItems.propTypes = {
  classes: PropTypes.shape({
    nested: PropTypes.object,
  }).isRequired,
};

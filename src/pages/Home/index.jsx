import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Page } from '../../components';

import Image from '../../../vendors/img/bg-masthead.jpg';

const styles = () => ({
  root: {
    backgroundImage: `url(${Image})`,
  },
});


const Home = (props) => {
  const { classes } = props;
  return (
    <Page
      className={classes.root}
      title="David Murdoch's Portfolio"
      paragraphs={[
        'Self-taught programmer with an eye for small details.',
      ]}
      titleVariant="display2"
      pageComponent="display2"
    />
  );
};

Home.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Home);

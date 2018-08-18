import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const Contact = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Input
        defaultValue="Hello world"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </React.Fragment>
  );
};

Contact.propTypes = {
  classes: PropTypes.shape({
    input: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Contact);

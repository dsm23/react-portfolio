import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

const Page = ({
  classes,
  title,
  paragraphs,
  titleVariant,
}) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={16}>
          <Typography variant={titleVariant}>
            {title}
          </Typography>
          { paragraphs.map((value) => {
            return (
              <Typography key={`About - ${value}`} component="p">
                {value}
              </Typography>
            );
          })}
        </Paper>
      </Grid>
    </Grid>
  </div>
);

Page.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    paper: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  titleVariant: PropTypes.string.isRequired,
};

export default withStyles(styles)(Page);

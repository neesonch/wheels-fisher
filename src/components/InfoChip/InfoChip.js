import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useStyles } from './InfoChip.styles.js';


const InfoChip = (props) => {

  const classes = useStyles();

  const { title, value } = props;

  return (
    <Grid item xs={6} sm={3}>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="subtitle2">{title}</Typography>
        <Typography className={classes.value}>{value}</Typography>
      </Paper>
    </Grid>
  )
}

export default InfoChip;
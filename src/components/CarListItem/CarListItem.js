import React from 'react';
import * as keys from 'Constants/car-keys.js';
import { useHistory } from "react-router-dom";
import { Card, CardMedia, Typography, Button, Grid, Paper } from '@material-ui/core';
import { useStyles } from './CarListItem.styles';

import InfoChip from 'Components/InfoChip';

const CarListItem = (props) => {

  const { car } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleCarSelection = (carId) => history.push(`/car/${carId}`);

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Typography variant="h5">{car[keys.NAME]}</Typography>
        <Typography variant="subtitle2">{car[keys.VENDOR_NAME]}</Typography>
        <CardMedia component="img" className={classes.cardImage} image={car.PictureURL} />
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          <InfoChip title="Status" value={car[keys.STATUS]} />
          <InfoChip title="Price" value={`$${car[keys.ESTIMATED_TOTAL_AMOUNT]}`} />
          <InfoChip title="Passengers" value={car[keys.PASSENGER_QUANTITY]} />
          <InfoChip title="Doors" value={car[keys.DOOR_COUNT]} />
        </Grid>
        <Button className={classes.viewCarButton} variant="contained" onClick={() => handleCarSelection(car.uid)}>View car</Button>
      </Grid>
    </Card>
  )
}

export default CarListItem;
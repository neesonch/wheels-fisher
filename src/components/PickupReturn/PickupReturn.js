import React, { useEffect, useState } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useStyles } from './PickupReturn.styles';
import { getPickupAndReturnInfo } from 'API/cars.js';
import * as keys from 'Constants/pickup-return-keys.js';
import moment from 'moment';

const PickupReturn = () => {

  const classes = useStyles();
  const [pickupAndReturnInfo, setPickupAndReturnInfo] = useState(null);
  const [formattedTimes, setFormattedTimes] = useState(null);
  const timeFormat = 'YYYY-MM-DD HH:mm';

  useEffect(() => {
    setPickupAndReturnInfo(getPickupAndReturnInfo());
  }, []);

  // Format the pickup and return date-times
  useEffect(() => {
    pickupAndReturnInfo && setFormattedTimes(
      {
        [keys.PICKUP_DATETIME]: moment(pickupAndReturnInfo[keys.PICKUP_DATETIME]).format(timeFormat),
        [keys.RETURN_DATETIME]: moment(pickupAndReturnInfo[keys.RETURN_DATETIME]).format(timeFormat)
      }
    )
  }, [pickupAndReturnInfo]);

  return (

    <Grid
      container
      direction="row"
      justify="center"
      spacing={2}
      className={classes.root
      }
    >
      {
        pickupAndReturnInfo && formattedTimes ?
          <>
            <Grid item>
              <Typography variant="overline">Pickup :</Typography>
              <Typography>{pickupAndReturnInfo.PickUpLocation[keys.NAME]}</Typography>
              <Typography>{formattedTimes[keys.PICKUP_DATETIME]}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">Return:</Typography>
              <Typography>{pickupAndReturnInfo.ReturnLocation[keys.NAME]}</Typography>
              <Typography>{formattedTimes[keys.RETURN_DATETIME]}</Typography>
            </Grid>
          </>
          : null
      }
    </Grid >
  )
}

export default PickupReturn;
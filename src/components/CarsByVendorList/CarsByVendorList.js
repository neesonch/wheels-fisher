import React from 'react';
import CarListItem from 'Components/CarListItem';
import { Typography, Divider, Box } from '@material-ui/core';
import * as keys from 'Constants/car-keys.js';
import { useStyles } from './CarsByVendorList.styles';

const CarsByVendorList = (props) => {

  const vendors = ["ALAMO", "AVIS", "HERTZ"];
  const classes = useStyles();
  const { cars } = props;

  return (
    <Box>
      {
        (cars.length) > 0 && vendors.map(vendor => {
          return (
            <Box className={classes.vendorGroup} key={vendor}>
              <Divider className={classes.divider} />
              <Typography variant="h6">{vendor}</Typography>
              <Divider className={classes.divider} />
              {
                cars.map(car => {
                  return car[keys.VENDOR_NAME] === vendor ? <CarListItem key={car.uid} car={car} /> : null;
                })
              }
            </Box>
          )
        })
      }
    </Box>
  )

}

export default CarsByVendorList;
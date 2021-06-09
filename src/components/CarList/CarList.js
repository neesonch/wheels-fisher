import React, { useEffect, useState } from 'react';
import { getCarsFlatList, getSortedCars } from 'API/cars.js';
import { Select, InputLabel, MenuItem, FormControlLabel, Switch } from '@material-ui/core';
import CarsByVendorList from 'Components/CarsByVendorList'
import CarsBasicList from 'Components/CarsBasicList'
import * as keys from 'Constants/car-keys.js';
import { useStyles } from './CarList.styles';

const CarList = () => {

  const classes = useStyles();
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState(keys.ESTIMATED_TOTAL_AMOUNT);
  const [groupByVendor, setGroupByVendor] = useState(false);

  useEffect(() => {
    //console.log('localCarsData: ', localCarsData[0].VehAvailRSCore); //DEBUG
    const carData = getCarsFlatList();
    setCars(carData);
    //console.log(carData); //DEBUG
  }, []);

  useEffect(() => {
    //console.log('SORT KEY: ', sortBy);  //DEBUG
    let sortedCars = getSortedCars(sortBy);
    console.log('sortedCars: ', sortedCars); //DEBUG
    setCars(sortedCars);
  }, [sortBy]);

  const handleSort = (event) => { setSortBy(event.target.value) }

  const handleGroupByVendor = (event) => { setGroupByVendor(event.target.checked) }

  return (
    <>
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        className={classes.sortByDropdown}
        labelId="sort-by-label"
        id="demo-simple-select"
        value={sortBy}
        onChange={handleSort}
      >
        <MenuItem value={keys.ESTIMATED_TOTAL_AMOUNT}>Price</MenuItem>
        <MenuItem value={keys.PASSENGER_QUANTITY}>Passenger Capacity</MenuItem>
        <MenuItem value={keys.TRANSMISSION_TYPE}>Transmission Type</MenuItem>
        <MenuItem value={keys.FUEL_TYPE}>Fuel Type</MenuItem>
        <MenuItem value={keys.AIR_CONDITIONING}>Air Conditioning</MenuItem>
        <MenuItem value={keys.DOOR_COUNT}>Doors</MenuItem>
        <MenuItem value={keys.BAGGAGE_QUANTITY}>Baggage Capacity</MenuItem>
      </Select>
      <FormControlLabel
        control={<Switch />}
        label="Group by vendor"
        onChange={handleGroupByVendor}
      />
      {
        groupByVendor ?
          <CarsByVendorList cars={cars} /> :
          <CarsBasicList cars={cars} />
      }
    </>
  )
}

export default CarList;
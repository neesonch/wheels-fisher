import React, { useEffect, useState } from 'react';
import { getCarsFlatList, getSortedCars } from 'API/cars.js';
import { Select, InputLabel, MenuItem } from '@material-ui/core';

import CarListItem from 'Components/CarListItem'
import * as keys from 'Constants/car-keys.js';

const CarList = () => {

  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState(keys.ESTIMATED_TOTAL_AMOUNT);

  useEffect(() => {
    //console.log('localCarsData: ', localCarsData[0].VehAvailRSCore); //DEBUG
    const carData = getCarsFlatList();
    setCars(carData);
    //console.log(carData); //DEBUG
  }, []);

  useEffect(() => {
    console.log('SORT KEY: ', sortBy);
    let sortedCars = getSortedCars(sortBy);
    console.log('sortedCars: ', sortedCars);
    setCars(sortedCars);
  }, [sortBy]);

  const handleSort = (event) => { setSortBy(event.target.value) }

  return (
    <>
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        id="demo-simple-select"
        value={sortBy}
        onChange={handleSort}
      >
        <MenuItem value={keys.ESTIMATED_TOTAL_AMOUNT}>Price</MenuItem>
        <MenuItem value={keys.PASSENGER_QUANTITY}>Passenger Capacity</MenuItem>
        <MenuItem value={keys.DOOR_COUNT}>Doors</MenuItem>
      </Select>
      { cars.length > 0 && cars.map(car => {
        return <CarListItem key={car.uid} car={car} />
      })}
    </>
  )
}

export default CarList;
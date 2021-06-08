import React, { useEffect, useState } from 'react';
import { getCarsFlatList } from 'API/cars.js';

import CarListItem from 'Components/CarListItem'

const CarList = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    //console.log('localCarsData: ', localCarsData[0].VehAvailRSCore); //DEBUG
    const carData = getCarsFlatList();
    setCars(carData);
    //console.log(carData); //DEBUG
  }, []);

  console.log('test')

  return (
    <>
      { cars.length > 0 && cars.map(car => {
        return <CarListItem key={car.uid} car={car} />
      })}
    </>
  )
}

export default CarList;
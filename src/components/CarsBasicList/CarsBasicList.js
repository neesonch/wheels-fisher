import React from 'react';
import CarListItem from 'Components/CarListItem'
import * as keys from 'Constants/car-keys.js';

const CarsBasicList = (props) => {

  const { cars } = props;

  return (
    <div>
      { cars.length > 0 && cars.map(car => {
        return <CarListItem key={car.uid} car={car} />
      })}
    </div>
  )
}

export default CarsBasicList;
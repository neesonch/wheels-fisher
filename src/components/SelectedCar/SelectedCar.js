import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getCarById } from 'API/cars.js';
import CarListItem from 'Components/CarListItem'

const SelectedCar = () => {

  let { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = getCarById(carId);
    setCar(selectedCar);
  }, []);

  return (
    car ? <CarListItem car={car} showBackButton={true} /> : null
  )
}

export default SelectedCar;
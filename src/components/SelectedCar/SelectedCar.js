import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCarById } from 'API/cars.js';

const SelectedCar = () => {

  let { carId } = useParams();

  useEffect(() => {
    console.log(getCarById(carId));
  }, []);

  return (
    <div></div>
  )
}

export default SelectedCar;
import React, { useEffect } from 'react';

const localCarsData = require('MockData/car-data.json');

const CarList = () => {

  useEffect(() => {
    //console.log('localCarsData: ', localCarsData[0].VehAvailRSCore); //DEBUG
    const cars = []
    localCarsData[0].VehAvailRSCore.VehVendorAvails.forEach(vendor => {
      vendor.VehAvails.forEach(vendorCar => {
        let car = { "uid": cars.length, ...vendor.Vendor, ...vendorCar.TotalCharge, ...vendorCar.Vehicle, "@Status": vendorCar.[`@Status`], "VehMakeModel": vendorCar.Vehicle.VehMakeModel['@Name'], }
        console.log('vendorCar: ', vendorCar);
        cars.push(car);
      });
    });
    console.log('CARS: ', cars);
  }), [];

  console.log('test')

  return (
    <div>This is the list of cars</div>
  )
}

export default CarList;
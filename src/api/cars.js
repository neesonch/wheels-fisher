const localCarsData = require('MockData/car-data.json');
import * as keys from 'Constants/car-keys.js';

// Unpack nested car data from data feed and return a flat list of cars
export const getCarsFlatList = () => {
  const cars = []
  localCarsData[0].VehAvailRSCore.VehVendorAvails.forEach(vendor => {
    vendor.VehAvails.forEach(vendorCar => {
      let car = {
        "uid": cars.length, [keys.VENDOR_NAME]: vendor.Vendor['@Name'], ...vendorCar.TotalCharge, ...vendorCar.Vehicle, [keys.STATUS]: vendorCar.[keys.STATUS], [keys.NAME]: vendorCar.Vehicle.VehMakeModel[keys.NAME],
      }
      //console.log('vendorCar', vendorCar);  //DEBUG
      cars.push(car);
    });
  });
  return cars;
}

export const getCarById = id => {
  const cars = getCarsFlatList();
  const parsedId = parseInt(id);
  return cars.find(car => car.uid === parsedId);
}

export const getSortedCars = (key) => {
  const cars = getCarsFlatList();

  // Check whether value to be compared can be cast to a number - slightly different sorting functions required because JS will evaluate '20' > '10' as true
  const isNumericValue = cars.length && cars[0][key] && !isNaN(cars[0][key])
  return isNumericValue ?
    cars.sort((a, b) => b[key] - a[key]) :
    cars.sort((a, b) => b[key] > a[key] ? 1 : -1)

}

export const getPickupAndReturnInfo = () => {
  return localCarsData[0].VehAvailRSCore.VehRentalCore;
}

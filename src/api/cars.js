const localCarsData = require('MockData/car-data.json');
import * as keys from 'Constants/car-keys.js';

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
  // default sort order is by price (low to high)
  cars.sort((a, b) => a[keys.ESTIMATED_TOTAL_AMOUNT] - b[keys.ESTIMATED_TOTAL_AMOUNT])
  return cars;
}

export const getCarById = id => {
  const cars = getCarsFlatList();
  const parsedId = parseInt(id);
  return cars.find(car => car.uid === parsedId);
}

export const getSortedCars = (key, ascending = false) => {
  const cars = getCarsFlatList();
  return ascending ?
    cars.sort((a, b) => a[key] - b[key]) :
    cars.sort((a, b) => b[key] - a[key])
}

export const getPickupAndReturnInfo = () => {
  return localCarsData[0].VehAvailRSCore.VehRentalCore;
}

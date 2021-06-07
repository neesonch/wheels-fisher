const localCarsData = require('MockData/car-data.json');
import * as keys from 'Constants/car-keys.js';

export const getCarsFlatList = () => {
  const cars = []
  localCarsData[0].VehAvailRSCore.VehVendorAvails.forEach(vendor => {
    vendor.VehAvails.forEach(vendorCar => {
      let car = {
        "uid": cars.length, ...vendor.Vendor, ...vendorCar.TotalCharge, ...vendorCar.Vehicle, [keys.STATUS]: vendorCar.[keys.STATUS], [keys.NAME]: vendorCar.Vehicle.VehMakeModel[keys.NAME],
      }
      //console.log('vendorCar: ', vendorCar);  //DEBUG
      cars.push(car);
    });
  });
  return cars;
}

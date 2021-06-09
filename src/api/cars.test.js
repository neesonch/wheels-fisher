import { getCarById } from './cars.js';


describe('Cars API', () => {
  it('getCarById should return information for a specific car', () => {

    const expectedCarData = {
      uid: 1,
      '@VendorName': 'ALAMO',
      '@RateTotalAmount': '851.03',
      '@EstimatedTotalAmount': '851.03',
      '@CurrencyCode': 'CAD',
      '@AirConditionInd': 'true',
      '@TransmissionType': 'Automatic',
      '@FuelType': 'Petrol',
      '@DriveType': 'Unspecified',
      '@PassengerQuantity': '5',
      '@BaggageQuantity': '4',
      '@Code': 'PCAR',
      '@CodeContext': 'CARTRAWLER',
      '@DoorCount': '4',
      VehMakeModel: { '@Name': 'Chrysler 300 or similar' },
      PictureURL: 'https://ctimg-fleet.cartrawler.com/chrysler/300/primary.png?auto=format&w=600',
      '@Status': 'Available',
      '@Name': 'Chrysler 300 or similar'
    }

    expect(getCarById(1)).toMatchObject(expectedCarData);
  });

  it('getCarById should return undefined if no matching car is found', () => {
    expect(getCarById(999)).toBe(undefined);
  });
});
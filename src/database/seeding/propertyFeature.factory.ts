import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const propertyFeature = new PropertyFeature();
  propertyFeature.area = faker.number.int({ min: 25, max: 2_500 });
  propertyFeature.bathrooms = faker.number.int({ min: 1, max: 3 });
  propertyFeature.bedrooms = faker.number.int({ min: 1, max: 3 });
  propertyFeature.parkingSpot = faker.number.int({ min: 1, max: 3 });
  propertyFeature.hasBalcony = faker.helpers.arrayElement([true, false]);
  propertyFeature.hasGardenYard = faker.helpers.arrayElement([true, false]);
  propertyFeature.hasSwimmingPool = faker.helpers.arrayElement([true, false]);

  return propertyFeature;
});

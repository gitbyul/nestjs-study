import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Property } from '../entities/property.entity';

export const PropertyFactory = setSeederFactory(Property, () => {
  const property = new Property();
  property.name = faker.location.street();
  property.price = +faker.commerce.price({
    min: 1_000,
    max: 1_000_000,
    dec: 0,
  });
  property.description = faker.lorem.sentence();

  return property;
});

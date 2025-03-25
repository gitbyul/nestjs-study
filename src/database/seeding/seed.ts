import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { pgConfig } from '../dbCofnig';
import { MainSeeder } from './main.seeder';
import { PropertyFactory } from './property.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { UserFactory } from './user.factory';

const options: DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});

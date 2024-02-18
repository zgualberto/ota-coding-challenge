import { Note } from './entities/note.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Init1708243062925 } from './migrations/1708243062925-init';

export const otaConfig: DataSourceOptions = {
  type: 'sqlite',
  name: 'otaDBConnection',
  database: 'ota.sqlite',
  entities: [Note],
  migrations: [Init1708243062925],
  synchronize: false,
};

export const portalDataSource = new DataSource(otaConfig);

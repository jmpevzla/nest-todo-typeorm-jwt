import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type DbType = 'mysql' | 'postgres';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: <DbType>process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'postgres-db',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'tododb',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migration',
  migrations: [
    __dirname + '/migration/**/*.ts',
    __dirname + '/migration/**/*.js',
  ],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migration',
  },
};

export = typeOrmConfig;

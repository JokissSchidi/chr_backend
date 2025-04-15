import * as path from 'path';
import * as dotenv from 'dotenv';
import * as config from 'config';
import { join } from 'path';

const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  /* do nothing */
  
}


export const DatabaseConfig = {

  type: process.env.DATABASE_TYPE || config.db.core.type as any,
  host: process.env.DATABASE_HOST || config.db.core.host,
  port: process.env.DATABASE_PORT || config.db.core.port,
  username: process.env.DATABASE_USERNAME || config.db.core.username,
  password: process.env.DATABASE_PASSWORD || config.db.core.password,
  database: process.env.DATABASE_NAME || config.db.core.database,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'src/migrations', '*.{ts,js}')],
  logging: true,
};
//console.log('DatabaseConfig', DatabaseConfig)
export default DatabaseConfig;
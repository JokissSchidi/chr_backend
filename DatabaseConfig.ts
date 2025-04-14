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

  type: process.env.DATABASE_TYPE || 'mysql' as any,
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '3306',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'chr',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'src/migrations', '*.{ts,js}')],
  logging: false,
};
//console.log('DatabaseConfig', DatabaseConfig)
export default DatabaseConfig;
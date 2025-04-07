import * as path from 'path';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { User } from 'src/users/entities/user.entity';

const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  /* do nothing */
}

const entities = [User];

export const DatabaseConfig = {
  type: process.env.DATABASE_TYPE as any,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  synchronize: true,
  migrationsRun: true,
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'src/migrations', '*.{ts,js}')],
//   entities: entities,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true,
};
console.log('DatabaseConfig', DatabaseConfig)
export default DatabaseConfig;
import path from 'path';
import { env } from './package.json';

if (env == 'DEV') {
  module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
      },
      migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      },
      seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
      },
      useNullAsDefault: true,
    },
  };
} else if (env == 'HM') {
  module.exports = {
    development: {
      client: 'pg',
      connection: {
        user: 'zzrawrehfpmpyw',
        database: 'd3kj7fsheqt4mg',
        host: 'ec2-184-73-243-101.compute-1.amazonaws.com',
        password:
          '24647d38df25543add017d092a62f67273860d5c6ede9a3066f0c41957426acd',
        port: 5432,
        ssl: { rejectUnauthorized: false },
      },
      migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      },
      seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
      },
      useNullAsDefault: true,
    },
  };
}

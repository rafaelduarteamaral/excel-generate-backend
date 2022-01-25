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
        user: 'imnvpdllguujrl',
        database: 'dckktrldupvc37',
        host: 'ec2-52-70-205-234.compute-1.amazonaws.com',
        password:
          'b88da2b563c0b5d1f43d8229aefa5abce306c4058c9e49809e10b189f82236a9',
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

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
        user: 'ejmixqqfoccofq',
        database: 'dbrojf03ehiujg',
        host: 'ec2-54-208-139-247.compute-1.amazonaws.com',
        password:
          'bc6cad20d88f8faa08a9539ae1d5d8914c9468125da52d6c0a2246e6ab733465',
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

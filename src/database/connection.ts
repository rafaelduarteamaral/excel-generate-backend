import knex from 'knex';
import path from 'path';
import { env } from '../../package.json';

let obj = {};

if (env == 'DEV') {
  obj = {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
  };
} else if (env == 'HM') {
  obj = {
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
  };
}

const db = knex(obj);

console.log(`Conexão ==> ( ${env} )`);

export default db;
// module.exports= db ;

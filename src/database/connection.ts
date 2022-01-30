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
      user: 'zzrawrehfpmpyw',
      database: 'd3kj7fsheqt4mg',
      host: 'ec2-184-73-243-101.compute-1.amazonaws.com',
      password:
        '24647d38df25543add017d092a62f67273860d5c6ede9a3066f0c41957426acd',
      port: 5432,
      ssl: { rejectUnauthorized: false },
    },
  };
}

const db = knex(obj);

console.log(`Conexão ==> ( ${env} )`);

export default db;
// module.exports= db ;

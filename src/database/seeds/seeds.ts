import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('usuarios').insert([
    {
      nome: 'rafael',
      email: 'rafaelduarteamaral@gmail.com',
      password: 'Rafael.3194',
    },
  ]);
}

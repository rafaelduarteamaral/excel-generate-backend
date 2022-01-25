import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert([
    { nome: 'admin', avatar: 'Aang', password: 'gestor' },
  ]);
}

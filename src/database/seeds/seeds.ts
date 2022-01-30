import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('usuarios').insert([
    {
      nome: 'matheus',
      email: 'contato@matheusduraes.com',
      password: 'dESTAKbRASIL@21',
    },
  ]);
}

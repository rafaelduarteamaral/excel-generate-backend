import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('usuarios', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('email').nullable();
    table.string('password').nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('usuarios');
}

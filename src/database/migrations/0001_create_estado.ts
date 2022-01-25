import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('estado', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('nome').nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('estado');
}

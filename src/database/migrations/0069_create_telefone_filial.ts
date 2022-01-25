import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('telefone_filial', table => {
    table.increments('id').primary();
    table.string('ddd').nullable();
    table.string('numero').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('telefone_filial');
}

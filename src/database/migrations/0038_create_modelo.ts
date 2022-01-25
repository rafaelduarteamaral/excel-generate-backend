import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('modelo', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('fabricante').nullable();
    table.string('ano_inicio').nullable();
    table.string('ano_fim').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('modelo');
}

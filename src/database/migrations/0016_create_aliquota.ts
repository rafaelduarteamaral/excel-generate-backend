import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('aliquota', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table
      .integer('id_estado')
      .unsigned()
      .index()
      .references('id')
      .inTable('estado');
    table.string('aliquota').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('aliquota');
}

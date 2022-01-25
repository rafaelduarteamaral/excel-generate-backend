import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('ncm', table => {
    table.increments('id').primary();
    table.string('codigonbm').nullable();
    table.string('codigoex').nullable();
    table.string('cest').nullable();
    table.string('nome').nullable();
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
  return knex.schema.dropTable('ncm');
}

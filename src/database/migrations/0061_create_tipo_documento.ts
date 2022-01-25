import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tipo_documento', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('sigla').nullable();
    table
      .integer('plano_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table
      .integer('filial_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tipo_documento');
}

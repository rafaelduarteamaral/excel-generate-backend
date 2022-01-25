import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cst_origem', table => {
    table.increments('id').primary();
    table.string('codigo').nullable();
    table.string('descricao').nullable();
    table.string('nome').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cst_origem');
}

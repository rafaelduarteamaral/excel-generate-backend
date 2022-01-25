import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tipo_doc_estoque', table => {
    table.increments('id').primary();
    table.string('tag').nullable();
    table.string('descricao').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tipo_doc_estoque');
}

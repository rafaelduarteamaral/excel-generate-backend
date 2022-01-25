import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('lista_preco', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('data_inicio').nullable();
    table.string('data_fim').nullable();
    table.string('ativo').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('lista_preco');
}

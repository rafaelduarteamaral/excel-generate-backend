import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('produto_endereco_movimento', table => {
    table.increments('id').primary();
    table.string('quantidade_movimento').nullable();
    table.string('quantidade_atual').nullable();
    table
      .integer('id_endereco_produto')
      .unsigned()
      .index()
      .references('id')
      .inTable('endereco_produtos');
    table
      .integer('id_produto')
      .unsigned()
      .index()
      .references('id')
      .inTable('produtos');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('produto_endereco_movimento');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('lista_preco_produtos', table => {
    table.increments('id').primary();
    table.string('valor_original').nullable();
    table.string('valor_desconto').nullable();
    table.string('porcentagem').nullable();
    table
      .integer('id_lista_preco')
      .unsigned()
      .index()
      .references('id')
      .inTable('lista_preco');
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
  return knex.schema.dropTable('lista_preco_produtos');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pedidos', table => {
    table.increments('id').primary();
    table.string('n_cotacao').nullable();
    table.string('data_emissao').nullable();
    table.string('comprador').nullable();
    table.string('fornecedor').nullable();
    table.string('codigo').nullable();
    table.string('condicao_pagamento').nullable();
    table.string('plano_contas').nullable();
    table.string('tipo_frete').nullable();
    table.string('informacoes').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pedidos');
}

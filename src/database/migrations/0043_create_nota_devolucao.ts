import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('nota_devolucao', table => {
    table.increments('id').primary();
    table.string('data_emissao').nullable();
    table.string('comprador').nullable();
    table.string('modelo').nullable();
    table
      .integer('fornecedor')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table.string('status').nullable();
    table.string('condicao_pagamento').nullable();
    table
      .integer('conta')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table.string('tipo_frete').nullable();
    table.double('valor_total').nullable();
    table.string('tipo_nota').defaultTo('D');
    table.string('finalidade').nullable();
    table.string('n_nota').nullable();
    table.string('tabela_padrao').nullable();
    table.string('destino').nullable();
    table.string('centro_custo').nullable();
    table.string('historico').nullable();
    table.string('doc_fornecedor').nullable();
    table.string('xml').nullable();
    table.string('cod_rastreio').nullable();
    table
      .integer('id_nota_venda')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_venda');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('nota_devolucao');
}

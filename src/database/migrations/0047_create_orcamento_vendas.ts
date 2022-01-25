import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('orcamentos_vendas', table => {
    table.increments('id').primary();
    table.string('n_cotacao').nullable();
    table.string('data_emissao').nullable();
    table.string('comprador').nullable();
    table.string('fornecedor').nullable();
    table.string('codigo').nullable();
    table.string('status').nullable();
    table.string('condicao_pagamento').nullable();
    table.string('plano_contas').nullable();
    table.string('tipo_frete').nullable();
    table.string('informacoes').nullable();
    table.string('tipo_nota').nullable();
    table.string('modelo').nullable();
    table.string('finalidade').nullable();
    table.string('data_emisssao').nullable();
    table.string('n_nota').nullable();
    table.string('cod_fornecedor').nullable();
    table.string('tabela_padrao').nullable();
    table.string('destino').nullable();
    table.string('centro_custo').nullable();
    table.string('historico').nullable();
    table.string('doc_fornecedor').nullable();
    table.string('xml').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('orcamentos_vendas');
}

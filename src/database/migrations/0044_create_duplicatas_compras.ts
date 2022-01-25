import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('duplicatas_compras', table => {
    table.increments('id').primary();
    table.string('forma_pagamento').nullable();
    table.string('condicao_pagamento').nullable();
    table.boolean('avista').defaultTo(false);
    table.string('n_parcelas').nullable();
    table.string('dias_intervalo').nullable();
    table.string('dias_vencimento').nullable();
    table.string('dias_vencimento_fixo').nullable();
    table.string('numero').nullable();
    table.string('nota').nullable();
    table.string('data_emissao').nullable();
    table.string('vencimento_original').nullable();
    table.string('vencimento_real').nullable();
    table.float('valor').nullable();
    table.string('baixado').nullable();
    table.string('pagamento').nullable();
    table.string('prefixo').nullable();
    table.string('cheque').nullable();
    table
      .integer('id_nota')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_compra');
    table
      .integer('id_orcamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('orcamentos');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('duplicatas_compras');
}

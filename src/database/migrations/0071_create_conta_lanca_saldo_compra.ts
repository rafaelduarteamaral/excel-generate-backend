import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('conta_saldo_lanca_compra', table => {
    table.increments('id').primary();
    table.timestamp('data').defaultTo(knex.fn.now());
    table.string('ativo').defaultTo('S');
    table.float('saldo').nullable();
    table.string('historico').nullable();
    table
      .integer('id_orcamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_compra');
    table
      .integer('id_financeiro')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_pagar');
    table
      .integer('id_lancamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('lancamentos_pagar');
    table
      .integer('id_conta')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('conta_saldo_lanca_compra');
}

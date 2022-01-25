import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('contas_pagar', table => {
    table.increments('id').primary();
    table.string('tipodocumento').nullable();
    table.integer('status').defaultTo('1');
    table.string('liberado').defaultTo('N');
    table
      .integer('conta_origem')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    // table.integer('conta_baixa').unsigned().index().references('id').inTable('contas_analitico');
    table.string('docfornecedor').nullable();
    table.string('centrocusto').nullable();
    table
      .integer('pessoa_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table
      .integer('id_orcamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_compra');
    table.string('data_lancamento').nullable();
    table.string('data_emissao').nullable();
    table.string('datavencimento_original').nullable();
    table.string('datavencimento_real').nullable();
    table.string('data_baixa').nullable();
    table.double('valor_v').nullable();
    table.double('valor_bruto').nullable();
    table.double('valor_desconto').nullable();
    table.double('valor_juros').nullable();
    table.double('valor_multas').nullable();
    table.double('valor_acrescimo').nullable();
    table.double('valor_baixa').nullable();
    table.double('valor_total').nullable();
    table.double('valor_saldo').nullable();
    table.double('saldo_inicial').nullable();
    table.double('perc_juros').nullable();
    table.string('descricao').nullable();
    table.string('prefixo').nullable();
    table.string('area').nullable();
    table.string('cheque').nullable();
    table.string('anexo').nullable();
    table.string('formapagamento').nullable();
    table.string('condicaopagamento').nullable();
    table.string('historico').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('contas_pagar');
}

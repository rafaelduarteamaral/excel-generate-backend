import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('nota_venda', table => {
    table.increments('id').primary();
    table.string('data_emissao').nullable();
    table.string('comprador').nullable();
    table.string('id_nota_tecno').nullable();
    table.string('natureza').nullable();
    table.string('modelo').nullable();
    table
      .integer('fornecedor')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table.string('status').nullable();
    table
      .integer('conta')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table.double('valor_total').nullable();
    table.string('informacoes').nullable();
    table.string('chave').nullable();
    table.string('protocolo').nullable();
    table.string('id_integracao').nullable();
    table.string('status_nota').nullable();
    table.string('informacoes_adicionais').nullable();
    table.string('tipo_nota').defaultTo('S');
    table.string('finalidade').nullable();
    table.string('n_nota').nullable();
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
  return knex.schema.dropTable('nota_venda');
}

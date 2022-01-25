import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('devolucao', table => {
    table.increments('id').primary();
    table.integer('nota_devolvida').nullable();
    table
      .integer('n_orcamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_venda');
    table
      .integer('devolucao')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_devolucao');
    table.string('data_emissao').nullable();
    table.string('data_devolucao').nullable();
    table.double('valor').nullable();
    table.double('credito').nullable();
    table.string('status').nullable();
    table
      .integer('pessoa')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table.string('historico').nullable();
    table.string('entrega').nullable();
    table.string('cod_rastreio').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('devolucao');
}

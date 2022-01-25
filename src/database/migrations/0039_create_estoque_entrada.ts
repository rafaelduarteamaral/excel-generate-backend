import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('entrada_estoque', table => {
    table.increments('id').primary();
    table
      .integer('produto_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('produtos');
    table.enum('tipo_movimento', ['EN', 'SA', 'TR', 'CO', 'VE']);
    table.string('data').nullable();
    table.string('nota').nullable();
    table.string('origem').nullable();
    table
      .integer('usuario_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users');
    table.string('cancelado').defaultTo('N').nullable();
    table.double('quantidade').notNullable();
    table.double('valor').nullable();
    table.string('requisicao').nullable();
    table.string('numeroorcamento').nullable();
    table.integer('inventario').nullable();
    table.string('tipo_substituicao').nullable();
    table.string('lote').nullable();
    table.string('devolucao_orcamento').nullable();
    table.string('estacao_id').nullable();
    table.string('processo').nullable();
    table.timestamp('datalancamento').defaultTo(knex.fn.now());
    table
      .integer('endereco_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('estoque_endereco');
    table
      .integer('tipo_doc_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('tipo_doc_estoque');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('entrada_estoque');
}

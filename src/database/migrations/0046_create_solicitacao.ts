import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('solicitacao', table => {
    table.increments('id').primary();
    table.string('responsavel').nullable();
    table.string('status').nullable();
    table.string('produto').nullable();
    table
      .integer('cod_produto')
      .unsigned()
      .index()
      .references('id')
      .inTable('produtos');
    table.string('cod_alternativo').nullable();
    table.string('quantidade').nullable();
    table.string('unidade').nullable();
    table.string('valor_unitario').nullable();
    table.string('valor_total').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('solicitacao');
}

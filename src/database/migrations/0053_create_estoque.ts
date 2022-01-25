import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('estoque', table => {
    table.increments('id').primary();
    table
      .integer('produto_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('produtos');
    table.timestamp('datalancamento').nullable();
    table.double('quantidade').notNullable();
    table.double('valor').nullable();
    table.integer('inventario').nullable();
    table
      .integer('endereco_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('estoque_endereco');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('estoque');
}

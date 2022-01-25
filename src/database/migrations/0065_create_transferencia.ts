import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('transferencias', table => {
    table.increments('id').primary();
    table.timestamp('data').defaultTo(knex.fn.now());
    table
      .integer('conta_origem')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table
      .integer('conta_destino')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table.double('valor').notNullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('transferencias');
}

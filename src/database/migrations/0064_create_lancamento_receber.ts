import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('lancamentos_receber', table => {
    table.increments('id').primary();
    table.timestamp('data').defaultTo(knex.fn.now());
    table
      .integer('conta_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_analitico');
    table
      .integer('financeiro_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('contas_receber');
    table.double('valor').nullable();
    table.string('historico').nullable();
    table.string('tipo').nullable();
    table.integer('contrapartida').nullable();
    table.integer('parcela').nullable();
    table.integer('duplicata').nullable();
    table
      .integer('pessoa_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('lancamentos_receber');
}

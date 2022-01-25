import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('contas_analitico', table => {
    table.increments('id').primary();
    table.string('numero').nullable();
    table.string('agencia').nullable();
    table.double('saldo').defaultTo(0.0);
    table
      .integer('sub_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('sub_contas');
    table.string('nome').nullable();
    table.string('tipo').nullable();
    table.string('moeda').nullable();
    table.timestamp('dataatualizacao').defaultTo(knex.fn.now());
    table
      .integer('pessoa_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table.string('naturezadespesa').nullable();
    table.string('inativo').defaultTo('N');
    table
      .integer('filial_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('contas_analitico');
}

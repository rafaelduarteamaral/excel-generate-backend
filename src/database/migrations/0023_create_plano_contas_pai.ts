import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('contas_pai', table => {
    table.increments('id').primary();
    table.double('saldo').defaultTo(0.0);
    table.string('nome').nullable();
    table.string('moeda').nullable();
    table.timestamp('dataatualizacao').defaultTo(knex.fn.now());
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
  return knex.schema.dropTable('contas_pai');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cheque', table => {
    table.increments('id').primary();
    table.string('data_emissao').nullable();
    table.string('cpf').nullable();
    table.string('data_vencimento_real').nullable();
    table.string('valor').nullable();
    table.string('alinea').nullable();
    table.string('situacao').nullable();
    table.string('emitente').nullable();
    table.string('banco').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cheque');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('endereco_empresa', table => {
    table.increments('id').primary();
    table.string('endereco').nullable();
    table.string('comeplemtno').nullable();
    table.string('casa').nullable();
    table.string('numero').nullable();
    table.string('cep').nullable();
    table
      .integer('id_empresa')
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
  return knex.schema.dropTable('endereco_empresa');
}

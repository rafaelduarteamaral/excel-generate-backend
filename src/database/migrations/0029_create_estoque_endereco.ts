import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('estoque_endereco', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('rua').nullable();
    table.string('endereco').nullable();
    table.enum('ativo', ['S', 'N']).nullable();
    table
      .integer('id_almoxarifado')
      .unsigned()
      .index()
      .references('id')
      .inTable('almoxarifado');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('estoque_endereco');
}

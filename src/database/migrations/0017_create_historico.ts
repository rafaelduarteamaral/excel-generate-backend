import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('historico', table => {
    table.increments('id').primary();
    table.string('text').nullable();
    table.enum('ativo', ['S', 'N']).nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('historico');
}

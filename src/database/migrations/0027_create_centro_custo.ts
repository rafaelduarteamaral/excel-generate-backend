import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('centro_custo', table => {
    table.increments('id').primary();
    table.string('codigo').nullable();
    table.string('nome').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('centro_custo');
}

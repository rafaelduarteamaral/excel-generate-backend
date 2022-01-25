import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('material', table => {
    table.increments('id').primary();
    table.string('materiais').nullable();
    table.string('tipo').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('material');
}

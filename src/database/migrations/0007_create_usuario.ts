import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('usuario', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('avatar').nullable();
    table.string('password').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('usuario');
}

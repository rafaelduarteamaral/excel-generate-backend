import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('contato_pessoa', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('email').nullable();
    table.string('telefone').nullable();
    table
      .integer('id_pessoa')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('contato_pessoa');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('familia_produto', table => {
    table.increments('id').primary();
    table.string('pai_id').nullable();
    table.string('familias').nullable();
    table.string('grupo').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('familia_produto');
}

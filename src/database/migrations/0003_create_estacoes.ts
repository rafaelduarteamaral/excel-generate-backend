import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('estacoes', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('estacoes');
}

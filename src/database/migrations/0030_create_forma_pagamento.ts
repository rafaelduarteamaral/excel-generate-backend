import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('forma_pagamento', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('codigo').nullable();
    table.enum('doc_liquidez', ['S', 'N']).nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('forma_pagamento');
}

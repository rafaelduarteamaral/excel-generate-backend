import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('condicoes_pagamentos', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('desconto').nullable();
    table.string('parcelas').nullable();
    table.string('dias').nullable();
    table.string('juros').nullable();
    table.integer('intervalo').nullable();
    table.string('vencimento').nullable();
    table
      .integer('id_forma_pagamento')
      .unsigned()
      .index()
      .references('id')
      .inTable('forma_pagamento');
    table
      .integer('id_tipo_documento')
      .unsigned()
      .index()
      .references('id')
      .inTable('tipo_documento');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('condicoes_pagamentos');
}

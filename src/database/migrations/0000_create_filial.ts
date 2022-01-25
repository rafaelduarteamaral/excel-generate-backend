import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('filial', table => {
    table.increments('id').primary();
    table.string('nome').nullable();
    table.string('razao_social').nullable();
    table.string('regiao').nullable();
    table.string('cnpj').nullable();
    table.integer('regime_tributario').nullable();
    table.integer('regime_tributario_especial').nullable();
    table.string('cnae').nullable();
    table.string('certificado').nullable();
    table.boolean('simples_nacional').defaultTo(false);
    table.boolean('incentivo_fiscal').defaultTo(false);
    table.boolean('incentivador_cultural').defaultTo(false);
    table.string('inscricao_estadual').nullable();
    table.string('inscricao_municipal').nullable();
    table.string('sequencia').nullable();
    table.string('csc').nullable();
    table.string('texto_padrao').nullable();
    table.string('email').nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('filial');
}

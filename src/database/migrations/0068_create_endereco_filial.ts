import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('endereco_filial', table => {
    table.increments('id').primary();
    table.string('tipo_logradouro').nullable();
    table.string('logradouro').nullable();
    table.string('numero').nullable();
    table.string('complemento').nullable();
    table.string('tipo_bairro').nullable();
    table.string('bairro').nullable();
    table.string('codigo_pais').nullable();
    table.string('descricao_pais').nullable();
    table.string('codigo_cidade').nullable();
    table.string('descricao_cidade').nullable();
    table.string('estado').nullable();
    table.string('cep').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('endereco_filial');
}

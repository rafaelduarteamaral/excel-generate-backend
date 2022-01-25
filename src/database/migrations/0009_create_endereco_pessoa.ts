import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('endereco_pessoa', table => {
    table.increments('id').primary();
    table.string('descricaoCidade').nullable();
    table.string('cep').nullable();
    table.string('tipoLogradouro').nullable();
    table.string('logradouro').nullable();
    table.string('tipoBairro').nullable();
    table.string('codigoCidade').nullable();
    table.string('complemento').nullable();
    table.string('estado').nullable();
    table.string('numero').nullable();
    table.string('bairro').nullable();
    table
      .integer('id_pessoa')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('endereco_usuario');
}

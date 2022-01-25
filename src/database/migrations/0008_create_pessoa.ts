import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pessoa', table => {
    table.increments('id').primary();
    table.string('tipo').nullable();
    table.string('nomeRazao').nullable();
    table.string('nomeFantasia').nullable();
    table.string('inscricaoEstadual').nullable();
    table.string('inscricaoMunicipal').nullable();
    table.string('email').nullable();
    table.string('cpfCnpj').nullable();
    table.string('rgInscricao').nullable();
    table.string('contribuinte').nullable();
    table.string('cnae').nullable();
    table.string('area').nullable();
    table.string('segmentoNegocio').nullable();
    table.string('dataNascimento').nullable();
    table.string('nacionalidade').nullable();
    table.string('naturalidade').nullable();
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pessoa');
}

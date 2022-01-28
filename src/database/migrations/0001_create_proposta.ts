import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('proposta', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('cliente').nullable();
    table.string('anoVeiculo').nullable();
    table.string('origemVeiculo').nullable();
    table.string('destinoVeiculo').nullable();
    table.string('telefoneCelular').nullable();
    table.string('dddCelular').nullable();
    table.string('enderecoColetaVeiculo').nullable();
    table.string('enderecoEntregaVeiculo').nullable();
    table.string('obeservacao').nullable();
    table.string('valorTotalVeiculo').nullable();
    table.string('orcamentoServico').nullable();
    table.string('coleta').nullable();
    table.string('entrega').nullable();
    table.string('prazoEntrega').nullable();
    table.string('corVeiculo').nullable();
    table.string('modeloVeiculo').nullable();
    table.timestamp('timestamp').defaultTo(knex.fn.now());
    table
      .integer('idUsuario')
      .unsigned()
      .index()
      .references('id')
      .inTable('ususario');
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('proposta');
}

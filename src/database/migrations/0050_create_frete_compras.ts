import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('frete_compras', table => {
    table.increments('id').primary();
    table.string('bairro').nullable();
    table.string('cod_transportadora').nullable();
    table.string('cod_antt').nullable();
    table.string('complemento').nullable();
    table.string('condicao_pagamento').nullable();
    table.string('data_entrega').nullable();
    table.string('especie').nullable();
    table.string('logradouro').nullable();
    table.string('marcas').nullable();
    table.string('motorista').nullable();
    table.string('n_documento_frete').nullable();
    table.string('numeracao').nullable();
    table.string('numero').nullable();
    table.double('peso_liquido').nullable();
    table.double('peso_bruto').nullable();
    table.string('placa').nullable();
    table.integer('quantidade').nullable();
    table.string('tipo_frete').nullable();
    table.string('transportadora').nullable();
    table.string('uf_placa').nullable();
    table.string('valor_frete').nullable();
    table
      .integer('id_nota')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_compra');
    table
      .integer('filial_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('frete_compras');
}

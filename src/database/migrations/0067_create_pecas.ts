import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('pecas', table => {
    table.increments('id').primary();
    table.string('cod_alternativo').nullable();
    table.string('nome').nullable();
    table.string('marca').nullable();
    table.string('endereco').nullable();
    table.string('familia').nullable();
    table.string('grupo').nullable();
    table.string('subgrupo').nullable();
    table.string('operacao_entrada').nullable();
    table.string('descricao').nullable();
    table.string('custo_compra').nullable();
    table.string('fornecedor').nullable();
    table.double('altura').nullable();
    table.double('comprimento').nullable();
    table.double('espessura').nullable();
    table.integer('garantia').nullable();
    table.string('unidade').nullable();
    table.string('cor').nullable();
    table.double('tamanho').nullable();
    table.string('data_entrada').nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('pecas');
}

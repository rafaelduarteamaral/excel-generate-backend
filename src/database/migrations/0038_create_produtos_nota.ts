import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('cod_barras').nullable();
    table.string('lista_servico').nullable();
    table.string('marca').nullable();
    table.string('familia').nullable();
    table.string('grupo').nullable();
    table.string('subgrupo').nullable();
    table.string('material').nullable();
    table.string('nserie').nullable();
    table.string('descricao').nullable();
    table.integer('cod_alternativo').nullable();
    table.double('preco').nullable();
    table.string('ativo').nullable();
    table
      .integer('id_almoxarifado')
      .unsigned()
      .index()
      .references('id')
      .inTable('almoxarifado');
    table
      .integer('id_estoque_endereco')
      .unsigned()
      .index()
      .references('id')
      .inTable('estoque_endereco');
    table.integer('id_ncm').unsigned().index().references('id').inTable('ncm');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
    table.double('saldo').defaultTo(0);
    table.double('saldo_mov').defaultTo(0);
    table.double('medio').nullable();
    table.double('total').nullable();
    table
      .integer('operacao_entrada')
      .unsigned()
      .index()
      .references('id')
      .inTable('tipo_operacao');
    table
      .integer('operacao_saida')
      .unsigned()
      .index()
      .references('id')
      .inTable('tipo_operacao');
    table.string('funcao').nullable();
    table.double('mg_valor_agregado').nullable();
    table.string('comissao').nullable();
    table.double('custo_compra').nullable();
    table.double('icms_compra').nullable();
    table.double('ipi_compra').nullable();
    table.double('ipi_venda').nullable();
    table.double('custo_frete').nullable();
    table.double('preco_fob').nullable();
    table.string('markup').nullable();
    table.double('preco_venda').nullable();
    table.double('icms_medio_vd').nullable();
    table.string('medio_descontos').nullable();
    table.string('acrescimos').nullable();
    table.double('margem_lucro').nullable();
    table.string('fornecedor').nullable();
    table.string('unidade').nullable();
    table.double('peso').nullable();
    table.string('data').nullable();
    table.string('produto_estruturado').nullable();
    table
      .integer('modelo_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('modelo');
    table
      .integer('fabricante_montadora_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('fabricante');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('produtos');
}

import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tipo_operacao', table => {
    table.increments('id').primary();
    table.string('cod_registro').nullable();
    table.string('nome').nullable();
    table.enum('tipo', ['E', 'S']).nullable();
    table.string('descricao').nullable();
    table.string('cod_enquadramento_ipi').nullable();
    table.enum('icms', ['N', 'S', 'O']).nullable();
    table.enum('ativo', ['S', 'N']).nullable();
    table.string('base_calculo_icms').nullable();
    table.string('aliquota_pis').nullable();
    table.string('aliquota_cofins').nullable();
    table.string('aliquota_issqn').nullable();
    table.string('csosn').nullable();
    table.string('piscofins').nullable();
    table
      .integer('id_cfop')
      .unsigned()
      .index()
      .references('id')
      .inTable('cfop');
    table
      .integer('id_cst_origem')
      .unsigned()
      .index()
      .references('id')
      .inTable('cst_origem');
    table
      .integer('id_cst_tributacao')
      .unsigned()
      .index()
      .references('id')
      .inTable('cst_tributacao');
    table
      .integer('id_icms')
      .unsigned()
      .index()
      .references('id')
      .inTable('icms');
    table
      .integer('id_st_ipi')
      .unsigned()
      .index()
      .references('id')
      .inTable('st_ipi');
    table
      .integer('id_csosn')
      .unsigned()
      .index()
      .references('id')
      .inTable('csosn');
    table
      .integer('id_st_pis_cofins')
      .unsigned()
      .index()
      .references('id')
      .inTable('st_pis_cofins');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tipo_operacao');
}

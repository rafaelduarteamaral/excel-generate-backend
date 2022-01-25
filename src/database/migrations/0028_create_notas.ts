import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('notas', table => {
    table.increments('id').primary();
    table.enum('tipo_nota', ['E', 'S']).nullable();
    table.string('modelo_nf').nullable();
    table.enum('finalidade', ['Normal', 'Complementar', 'Ajuste', 'Devolução']);
    table.enum('status', ['Elaboração', 'Cancelado', 'Orçamento']);
    table.date('data_emissao').nullable();
    table.string('numero_nota');
    table.string('email').nullable();
    table.string('natureza_operacao').nullable();
    table.string('informacoes_adicionais_fisco');
    table.string('chave_nf_referencia');
    table.string('informacoes_complementares');
    table.string('telefone').nullable();
    table
      .integer('id_centro_custo')
      .unsigned()
      .index()
      .references('id')
      .inTable('centro_custo');
    table
      .integer('id_pessoa_fornecedor')
      .unsigned()
      .index()
      .references('id')
      .inTable('pessoa');
    table
      .integer('id_pessoa_vendedor')
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
  return knex.schema.dropTable('notas');
}

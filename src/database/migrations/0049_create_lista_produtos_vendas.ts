import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('lista_produto_vendas', table => {
    table.increments('id').primary();
    table.string('data_entrega').nullable();
    table.string('codigo_produto').nullable();
    table.string('codigo_alt').nullable();
    table.string('lote').nullable();
    table.string('unidade').nullable();
    table.string('natureza').nullable();
    table.string('descricao').nullable();
    table.double('quantidade').nullable();
    table.double('valor').nullable();
    table.string('tipo_operacao').nullable();
    table.float('desconto').nullable();
    table.double('bruto').nullable();
    table.double('qtd_entregue').nullable();
    table.double('qtd_devolvida').nullable();
    table.float('perc_desconto').nullable();
    table.float('valor_ipi').nullable();
    table.float('valor_bcipi').nullable();
    table.double('total').nullable();
    table.float('valor_icms').nullable();
    table.float('valor_bcicms').nullable();
    table.float('valor_icmsst').nullable();
    table.float('valor_bcicmsst').nullable();
    table.float('valor_pis').nullable();
    table.float('valor_bcpis').nullable();
    table.float('valor_cofins').nullable();
    table.float('valor_bccofins').nullable();
    table.float('valor_cofinsst').nullable();
    table.float('valor_issqn').nullable();
    table.float('perc_ipi').nullable();
    table.float('perc_icms').nullable();
    table.float('perc_icmsst').nullable();
    table.float('perc_pis').nullable();
    table.float('perc_cofins').nullable();
    table.float('perc_cofinsst').nullable();
    table.float('perc_issqn').nullable();
    table.float('preco_tabela').nullable();
    table.float('peso_unitario').nullable();
    table.float('peso_liq').nullable();
    table.float('valor_frete').nullable();
    table.string('movimento').nullable();
    table.string('ncm').nullable();
    table.string('cest_ncm').nullable();
    table.string('cst_icms').nullable();
    table.string('origem').nullable();
    table.string('cst_pis').nullable();
    table.string('icms_dif').nullable();
    table.string('bcfcp').nullable();
    table.string('cfcp').nullable();
    table.string('fcp').nullable();
    table.string('cst_ipi').nullable();
    table.string('cst_cofins').nullable();
    table.string('cfop').nullable();
    table.string('csosn').nullable();
    table.string('emenda').nullable();
    table.string('cbenef').nullable();
    table.string('pdif').nullable();
    table.float('perc_cbenef').nullable();
    table
      .integer('endereco_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('estoque_endereco');
    table
      .integer('id_nota_venda')
      .unsigned()
      .index()
      .references('id')
      .inTable('nota_venda');
    table
      .integer('id_produto')
      .unsigned()
      .index()
      .references('id')
      .inTable('produtos');
    table
      .integer('id_filial')
      .unsigned()
      .index()
      .references('id')
      .inTable('filial');
    table.string('solicitacao_id').nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('lista_produto_vendas');
}

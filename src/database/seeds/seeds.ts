import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert([
      { nome: "admin", avatar: "Aang", password: "gestor", id_filial: 1 },
      { nome: "admin2", avatar: "Aang", password: "1234", id_filial: 1 },
      { nome: "admin3", avatar: "Aang", password: "1234", id_filial: 1 },
      { nome: "admin4", avatar: "Aang", password: "1234", id_filial: 1 },
  ]);

  // await knex('forma_pagamento').insert([
  //     { nome: "boleto", codigo: "1", doc_liquidez: 'S', id_filial: 1 },
  //     { nome: "cartao", codigo: "2", doc_liquidez: 'N', id_filial: 1 },
  //     { nome: "cheque", codigo: "3", doc_liquidez: 'N', id_filial: 1 },
  //     { nome: "dinheiro", codigo: "4", doc_liquidez: 'S', id_filial: 1 },
  // ]);
  // await knex('condicoes_pagamentos').insert([
  //     { nome: "15 DDL", desconto: "00", parcelas: "1", dias: "15", juros: "0", intervalo: 0, vencimento: "28", id_forma_pagamento: 1, id_tipo_documento: 1, id_filial: 1 },
  //     { nome: "30 DDL", desconto: "00", parcelas: "1", dias: "30", juros: "0", intervalo: 0, vencimento: "28", id_forma_pagamento: 2, id_tipo_documento: 2, id_filial: 1 },
  //     { nome: "60 DDL", desconto: "00", parcelas: "2", dias: "60", juros: "0", intervalo: 0, vencimento: "28", id_forma_pagamento: 3, id_tipo_documento: 3, id_filial: 1 },
  //     { nome: "90 DDL", desconto: "00", parcelas: "3", dias: "90", juros: "0", intervalo: 0, vencimento: "28", id_forma_pagamento: 4, id_tipo_documento: 4, id_filial: 1 },
  // ]);

  // await knex('pessoa').insert([
  //     {tipo: "teste tipo", nomeRazao: "MG POLIMEROS IMPORTADORA E EXPORTADORA LTDA", nomeFantasia: "MG POLIMEROS IMPORTADORA E EXPORTADORA", inscricaoEstadual: "587344801113", inscricaoMunicipal: "587344801113", email: "suporte@ambienteconsultoria.com", cpfCnpj: "30283449000175", rgInscricao: null, contribuinte: null, cnae: null, segmentoNegocio: "Reciclagem", nacionalidade: "Brasil", naturalidade: "SP", id_filial: 1}
  // ]);
  // await knex('endereco_pessoa').insert([
  //    { descricaoCidade: "Rio Claro", cep: "13505600", tipoLogradouro: "Avenida", logradouro: "Brasil", tipoBairro: "Cidade Azul", codigoCidade: "3543907", complemento: "cond cidade  azul  2 brcao 14-b", estado: "SP", numero: "2800", bairro: "distrito industrial", id_pessoa: 1, id_filial: 1}
  // ]);
  // await knex('telefone_pessoa').insert([
  //     {ddd: "19", numero: "35354968", id_pessoa: 1, id_filial: 1}
  // ]);

  // await knex('ncm').insert([
  //     { codigonbm: "1", codigoex: "1", cest: "1", nome: "ncm1", aliquota: "2", id_filial: 1 },
  //     { codigonbm: "2", codigoex: "2", cest: "1", nome: "ncm2", aliquota: "2", id_filial: 1 },
  //     { codigonbm: "3", codigoex: "3", cest: "1", nome: "ncm3", aliquota: "2", id_filial: 1 },
  //     { codigonbm: "4", codigoex: "4", cest: "1", nome: "ncm4", aliquota: "2", id_filial: 1 },
  // ]);
  // await knex('tipo_documento').insert([
  //     {
  //         nome: "tipo doc 1", sigla: "td1", plano_id: 1, filial_id: 1
  //     },
  //     {
  //         nome: "tipo doc 2", sigla: "td2", plano_id: 2, filial_id: 1
  //     }
  // ])
  //    await knex('tipo_operacao').insert([
  //     {
  //         nome: "opera 1", id_filial: 1
  //     },
  //     {
  //         nome: "opera 2", id_filial: 1
  //     }
  // ])
  // await knex('produtos').insert([
  //     { nome: "flake teste 1", unidade: "KG", cod_barras: "123", lista_servico: "1234", marca: "1234", familia: "String", grupo: "String", subgrupo: "String", material: "1234", nserie: "1234", descricao: "Testando a descricao", id_filial: 1, cod_alternativo: 1234, preco: 25.89, ativo: "1234", saldo: 1234.0, saldo_mov: 1234.0, medio: 5.8, total: 9.1, funcao: "1234 funcao", mg_valor_agregado: 3.45, comissao: "1234 comissao", custo_compra: 56.54, icms_compra: 9.8, ipi_compra: 8.7, ipi_venda: 2.5, custo_frete: 85.74, preco_fob: 57.12, markup: "markup", preco_venda: 57.85, icms_medio_vd: 89.85, medio_descontos: "97.85", acrescimos: "acrescimos", margem_lucro: 12.58, peso: 5.7, data: "12/01/1968", produto_estruturado: "1234 estruturado" },
  //     { nome: "polipropileno teste2", unidade: "KG", cod_barras: "123", lista_servico: "1234", marca: "1234", familia: "String", grupo: "String", subgrupo: "String", material: "1234", nserie: "1234", descricao: "Testando a descricao", id_filial: 1, cod_alternativo: 1234, preco: 25.89, ativo: "1234", saldo: 1234.0, saldo_mov: 1234.0, medio: 5.8, total: 9.1, funcao: "1234 funcao", mg_valor_agregado: 3.45, comissao: "1234 comissao", custo_compra: 56.54, icms_compra: 9.8, ipi_compra: 8.7, ipi_venda: 2.5, custo_frete: 85.74, preco_fob: 57.12, markup: "markup", preco_venda: 57.85, icms_medio_vd: 89.85, medio_descontos: "97.85", acrescimos: "acrescimos", margem_lucro: 12.58, peso: 5.7, data: "12/01/1968", produto_estruturado: "1234 estruturado" },
  //     { nome: "pet teste3", unidade: "KG", cod_barras: "123", lista_servico: "1234", marca: "1234", familia: "String", grupo: "String", subgrupo: "String", material: "1234", nserie: "3", descricao: "Testando a descricao", id_filial: 1, cod_alternativo: 1234, preco: 25.89, ativo: "1234", saldo: 1234.0, saldo_mov: 1234.0, medio: 5.8, total: 9.1, funcao: "1234 funcao", mg_valor_agregado: 3.45, comissao: "1234 comissao", custo_compra: 56.54, icms_compra: 9.8, ipi_compra: 8.7, ipi_venda: 2.5, custo_frete: 85.74, preco_fob: 57.12, markup: "markup", preco_venda: 57.85, icms_medio_vd: 89.85, medio_descontos: "97.85", acrescimos: "acrescimos", margem_lucro: 12.58, peso: 5.7, data: "12/01/1968", produto_estruturado: "1234 estruturado" },
  //     { nome: "flake cristal teste4", unidade: "KG", cod_barras: "123", lista_servico: "1234", marca: "1234", familia: "String", grupo: "String", subgrupo: "String", material: "1234", nserie: "1234", descricao: "Testando a descricao", id_filial: 1, cod_alternativo: 1234, preco: 25.89, ativo: "1234", saldo: 1234.0, saldo_mov: 1234.0, medio: 5.8, total: 9.1, funcao: "1234 funcao", mg_valor_agregado: 3.45, comissao: "1234 comissao", custo_compra: 56.54, icms_compra: 9.8, ipi_compra: 8.7, ipi_venda: 2.5, custo_frete: 85.74, preco_fob: 57.12, markup: "markup", preco_venda: 57.85, icms_medio_vd: 89.85, medio_descontos: "97.85", acrescimos: "acrescimos", margem_lucro: 12.58, peso: 5.7, data: "12/01/1968", produto_estruturado: "1234 estruturado" },
  // ]);

  // await knex('ncm').insert([
  //     {codigonbm: "84774090", codigoex: null, cest: "0300400", nome: "Reatores nucleares, caldeiras, máquinas, aparelhos e instrumentos m", id_filial: 1},
  //     {codigonbm: "19021100", codigoex: null, cest: "0300400", nome: "Preparações à base de cereais, farinhas, amidos, féculas ou de leite; produtos d", id_filial: 1},
  //     {codigonbm: "25051000", codigoex: null, cest: "0300400", nome: "Sal; enxofre; terras e pedras; gesso, cal e cimento - Areias naturais de qualque", id_filial: 1},
  // ])
  // await knex('cfop').insert([
  //     { nome: "Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e o", codigo: 6123, descricao: "Classificam-se neste código as vendas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas para serem industrializadas em outro estabelecimento, por conta e ordem do adquirente, sem que as mercadorias tenham transitado pelo estabelecimento do adquirente.", id_filial: 1 },
  //     { nome: "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação	", codigo: 6114, descricao: "Classificam-se neste código as Classificam-se neste código as vendas efetivas de mercadorias adquiridas ou recebidas de terceiros, que não tenham sido objeto de qualquer processo industrial no estabelecimento, remetidas anteriormente a título de consignação mercantil	", id_filial: 1 },
  // ]);
  // await knex('cst_origem').insert([
  //     { codigo: 0, descricao: "Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8", nome: "Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8", id_filial: 1 },
  //     { codigo: 3, descricao: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% (quarenta por cento) e inferior ou igual a 70% (setenta por cento)", nome: "Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% (quarenta por cento) e inferio", id_filial: 1 },
  // ]);
  // await knex('cst_tributacao').insert([
  //     { codigo: "102", descricao: "Simples Nacional ICMS", nome: "ICMS Simples Nacional", id_filial: 1 },
  //     { codigo: "08", descricao: "Simples Nacional PIS/COFINS", nome: "PIS/COFINS SIMPLES NACIONAL", id_filial: 1 }
  // ]);

  // await knex('estado').insert([
  //     {nome: "Distrito Federal"},
  //     {nome: "Tocantins"},
  //     {nome: "São Paulo"},
  //     {nome: "Rio de Janeiro"}
  // ])
  // await knex('aliquota').insert([
  //     {nome: "ICMS", id_estado: 1, aliquota: 7, id_filial: 1},
  //     {nome: "ICMS", id_estado: 2, aliquota: 7, id_filial: 1},
  //     {nome: "ICMS", id_estado: 3, aliquota: 18, id_filial: 1},
  //     {nome: "ICMS", id_estado: 4, aliquota: 12, id_filial: 1}
  // ])

  // await knex('nota_compra').insert([
  //     {
  //         id: 1,
  //         data_emissao: "2021/11/09",
  //         comprador: "testando comprador",
  //         modelo: "NFE",
  //         fornecedor: 1,
  //         natureza: "Venda de mercadoria Teste",
  //         status: "Elaboração",
  //         conta: 1,
  //         valor_total: 2.00,
  //         informacoes: "AQUI VEM ALGUMAS INFO",
  //         informacoes_adicionais: "Simples Nacional",
  //         tipo_nota: "S",
  //         finalidade: "S",
  //         n_nota: "123",
  //         tabela_padrao: "padrao",
  //         destino: "algum lugar",
  //         centro_custo: "compra - venda",
  //         historico: "Testando historico",
  //         doc_fornecedor: "55555",
  //         xml: "asdasdasdasdasdasdasdasdasdsadadasdasdasdad",
  //         id_filial: 1,
  //     }
  // ]);
  // await knex('lista_produto_compras').insert([
  //     {
  //         data_entrega: "2021/11/09",
  //         codigo_produto: 1,
  //         codigo_alt: "001",
  //         unidade: "CX",
  //         quantidade: "1",
  //         valor: 1.00,
  //         bruto: 1.00,
  //         descricao: "Teste plug notas",
  //         perc_desconto: "Sem perc desc ",
  //         desconto: "Sem desc",
  //         total: 1.00,
  //         movimento: "Estoque movimenta",
  //         natureza: "Venda de mercadoria adquirida ou recebida de terceiros",
  //         endereco_id: 1,
  //         id_nota: 1,
  //         id_produto: 1,
  //         valor_icms: 2,
  //         valor_icmsst: 3,
  //         valor_frete: 55,
  //         valor_bcicms: 2,
  //         ncm: "11081200",
  //         cest_ncm: "0123555",
  //         origem: "0",
  //         cst_icms: "102",
  //         cst_ipi: 4,
  //         cst_cofins: "08",
  //         cst_pis: "08",
  //         cfop: "6102",
  //         csosn: "102",
  //         emenda: 4,
  //         cbenef: "4",
  //         perc_cbenef: 4,
  //         valor_bcicmsst: 2,
  //         valor_pis: 2,
  //         valor_bcpis: 2,
  //         valor_cofins: 2,
  //         valor_bccofins: 2,
  //         valor_cofinsst: 2,
  //         valor_issqn: 2,
  //         perc_ipi: 2,
  //         perc_icms: 2,
  //         perc_icmsst: 2,
  //         perc_pis: 2,
  //         perc_cofins: 2,
  //         perc_cofinsst: 2,
  //         perc_issqn: 2,
  //         id_filial: 1
  //     },
  //     {
  //         data_entrega: "2021/11/09",
  //         codigo_produto: 1,
  //         codigo_alt: "001",
  //         unidade: "CX",
  //         quantidade: "1",
  //         valor: 1.00,
  //         bruto: 1.00,
  //         descricao: "Teste plug notas 2",
  //         perc_desconto: "Sem perc desc ",
  //         desconto: "Sem desc",
  //         total: 1.00,
  //         movimento: "Estoque movimenta",
  //         natureza: "Venda de mercadoria adquirida ou recebida de terceiros",
  //         endereco_id: 1,
  //         id_nota: 1,
  //         id_produto: 1,
  //         valor_icms: 2,
  //         valor_icmsst: 3,
  //         valor_frete: 55,
  //         valor_bcicms: 2,
  //         ncm: "11081200",
  //         cest_ncm: "0123555",
  //         origem: "0",
  //         cst_icms: "102",
  //         cst_ipi: 4,
  //         cst_cofins: "08",
  //         cst_pis: "08",
  //         cfop: "6102",
  //         csosn: "102",
  //         emenda: 4,
  //         cbenef: "4",
  //         perc_cbenef: 4,
  //         valor_bcicmsst: 2,
  //         valor_pis: 2,
  //         valor_bcpis: 2,
  //         valor_cofins: 2,
  //         valor_bccofins: 2,
  //         valor_cofinsst: 2,
  //         valor_issqn: 2,
  //         perc_ipi: 2,
  //         perc_icms: 2,
  //         perc_icmsst: 2,
  //         perc_pis: 2,
  //         perc_cofins: 2,
  //         perc_cofinsst: 2,
  //         perc_issqn: 2,
  //         id_filial: 1
  //     }
  // ])
  // await knex('duplicatas_compras').insert([
  //     {forma_pagamento: "01", condicao_pagamento: "A vista", avista: true, id_nota: 1, id_filial:1}
  // ])

  // await knex('contas_analitico').insert([
  //     {numero: '123' ,agencia: '432', saldo: 200.00, sub_id: 1, nome: "teste nome",
  //          tipo: "E", moeda: "BRL", pessoa_id: 1, naturezadespesa: "venda", filial_id: 1},
  //          {numero: '55' ,agencia: '552', saldo: 220.00, sub_id: 1, nome: "teste 2",
  //          tipo: "E", moeda: "BRL", pessoa_id: 1, naturezadespesa: "venda", filial_id: 1}
  // ])
  // await knex('centro_custo').insert([
  //     {codigo: 1, nome: 'centro custo 1', id_filial: 1},
  //     {codigo: 2, nome: 'centro custo 2', id_filial: 1},
  //     {codigo: 3, nome: 'centro custo 3', id_filial: 1}
  // ])
  // await knex('prefixo').insert([
  //     {nome: 'prefixo 1', numero: '123', id_filial: 1},
  //     {nome: 'prefixo 2', numero: '145', id_filial: 1},
  //     {nome: 'prefixo 3', numero: '167', id_filial: 1}
  // ])
  // await knex('filial').insert([
  //     {nome: "Ambiente Consultoria", razao_social: "AMBIENTE CONSULTORIA E DESENVOLVIMENTO DE SISTEMAS LTDA",
  //     regiao: "1", cnpj: "39731595000190", regime_tributario: 1, regime_tributario_especial: null, cnae: "47.51-2-01",
  //     certificado: "61b8a419f1f349575542a8a3", simples_nacional: true, incentivo_fiscal: false, incentivador_cultural: false,
  //     inscricao_estadual: "0801415300125", inscricao_municipal: "0801415300125", sequencia: "1", texto_padrao: "EMPRESA OPTANTE PELO SIMPLES NACIONAL DE ACORDO COM A LEI COMPLEMENTAR 123/2006",
  //     email: "suporte@ambienteconsultoria.com"}
  // ])
  // await knex('endereco_filial').insert([
  //     {tipo_logradouro: "Trecho", logradouro: "Trecho 03", numero: "985", complemento: "Bloco “D” Ed. Marina Office, Cobertura, sala", tipo_bairro: "Setor", bairro: "SIA", codigo_pais: "1058", descricao_pais: "Brasil", codigo_cidade: "5300108", descricao_cidade: "Brasília", estado: "DF", cep: "71200030", id_filial: 1}
  // ])
  // await knex('telefone_filial').insert([
  //     {ddd: "61", numero: "37033997", id_filial: 1}
  // ])
  // await knex('pessoa').insert([
  //   {
  //     tipo: 'teste tipo2',
  //     nomeRazao: 'AMBIENTE CONSULTORIA E DESENVOLVIMENTO DE SISTEMAS LTDA',
  //     nomeFantasia: 'Ambiente Consultoria',
  //     inscricaoEstadual: '0801415300125',
  //     inscricaoMunicipal: '0801415300125',
  //     email: 'suporte@ambienteconsultoria.com',
  //     cpfCnpj: '39731595000190',
  //     rgInscricao: null,
  //     contribuinte: null,
  //     cnae: null,
  //     segmentoNegocio: 'Reciclagem',
  //     nacionalidade: 'Brasil',
  //     naturalidade: 'DF',
  //     id_filial: 2,
  //   },
  // ]);
  // await knex('endereco_pessoa').insert([
  //   {
  //     descricaoCidade: 'Brasília',
  //     cep: '71200030',
  //     tipoLogradouro: 'Trecho',
  //     logradouro: 'Trecho 03',
  //     tipoBairro: 'Setor',
  //     codigoCidade: '5300108',
  //     complemento: 'Bloco “D” Ed. Marina Office, Cobertura, sala',
  //     estado: 'DF',
  //     numero: '985',
  //     bairro: 'SIA',
  //     id_pessoa: 2,
  //     id_filial: 2,
  //   },
  // ]);
  // await knex('telefone_pessoa').insert([
  //   { ddd: '61', numero: '37033997', id_pessoa: 2, id_filial: 2 },
  // ]);
  // await knex('entrada_estoque').insert([
  //   {
  //     produto_id: 2,
  //     quantidade: 600,
  //     tipo_movimento: 'EN',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  //   {
  //     produto_id: 2,
  //     quantidade: 400,
  //     tipo_movimento: 'EN',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  //   {
  //     produto_id: 2,
  //     quantidade: 500,
  //     tipo_movimento: 'EN',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  // ]);
  // await knex('saida_estoque').insert([
  //   {
  //     produto_id: 2,
  //     quantidade: 100,
  //     tipo_movimento: 'SA',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  //   {
  //     produto_id: 2,
  //     quantidade: 300,
  //     tipo_movimento: 'SA',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  //   {
  //     produto_id: 2,
  //     quantidade: 500,
  //     tipo_movimento: 'SA',
  //     valor: 3.5,
  //     data: '30/08/2021',
  //     inventario: 1,
  //     endereco_id: 7,
  //     id_filial: 1,
  //   },
  // ]);
  // await knex('filial').insert([
  //     {nome: "MG POLIMEROS IMPORTADORA E EXPORTADORA", razao_social: "MG POLIMEROS IMPORTADORA E EXPORTADORA LTDA", regiao: "1", cnpj: "30283449000175",
  //     regime_tributario: 3, regime_tributario_especial: false, cnae: "9529199",
  //     certificado: "61dc3e53ffe9bf04e3d2c1a7", simples_nacional: false, incentivo_fiscal: false, incentivador_cultural: false,
  //     inscricao_estadual: "587344801113", inscricao_municipal: "587344801113", sequencia: 1, texto_padrao: "",
  //     email: "suporte@ambienteconsultoria.com"
  // }])
  // await knex('endereco_filial').insert([
  //     {tipo_logradouro: "Avenida", logradouro: "Avenida Brasil", numero: "2800", complemento: "cond cidade  azul  2 brcao 14-b", tipo_bairro: "Distrito", bairro: "distrito  industrial", codigo_pais: "1058", descricao_pais: "Brasil", codigo_cidade: "3543907", descricao_cidade: "Rio Claro", estado: "SP", cep: "13505600", id_filial: 2}
  // ])
  // await knex('telefone_filial').insert([
  //     {ddd: "19", numero: "1935354968", id_filial: 2}
  // ])
}

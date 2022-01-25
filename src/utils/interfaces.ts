export interface Empresa {
  id: number;
  nome: string;
  razao_social: string;
  regiao: string;
  cnpj: string;
  regime_tributario: number;
  regime_tributario_especial: number;
  cnae: string;
  certificado: string;
  simples_nacional: boolean;
  incentivo_fiscal: boolean;
  incentivador_cultural: boolean;
  inscricao_estadual: string;
  inscricao_municipal: string;
  // eslint-disable-next-line no-use-before-define
  endereco: Endereco[];
  telefone: Telefone[];
  sequencia: string;
  fuso_horario: string;
  csc: string;
  codigo_inep: string;
  texto_padrao: string;
  email: string;
  aproveitamento_credito: number;
  juros_boleto: number;
  multa_boleto: number;
  protesto: number;
  filial_verifica: boolean;
}

export interface Endereco {
  id: number;
  tipo_logradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  tipo_bairro: string;
  bairro: string;
  codigo_pais: string;
  descricao_pais: string;
  codigo_cidade: string;
  descricao_cidade: string;
  estado: string;
  cep: string;
  id_empresa: number;
  id_filial: number;
}

export interface Telefone {
  id: number;
  ddd: string;
  numero: string;
  id_filial: number;
}

export interface FunctionInterface {
  validations: [];
  handler: Function;
}

export class ItensSimples {
  public codigo?: string;

  public ncm?: string;

  public cest?: string;

  public cfop?: string;

  public unidade?: Unidade | undefined;

  public valorUnitario?: ValorUnitario | undefined;

  public valor?: number;

  public descricao?: string;

  public tributos?: TributosSimples | undefined;

  public quantidade?: QuantidadeSimples;

  public informacoesComplementares?: string;

  constructor(
    codigo?: string,
    ncm?: string,
    cest?: string,
    cfop?: string,
    unidade?: Unidade | undefined,
    valorUnitario?: ValorUnitario | undefined,
    valor?: number,
    descricao?: string,
    tributos?: TributosSimples | undefined,
    quantidade?: QuantidadeSimples,
    informacoesComplementares?: string,
  ) {
    this.codigo = codigo;
    this.ncm = ncm;
    this.cest = cest;
    this.cfop = cfop;
    this.unidade = unidade;
    this.valorUnitario = valorUnitario;
    this.valor = valor;
    this.descricao = descricao;
    this.tributos = tributos;
    this.quantidade = quantidade;
    this.informacoesComplementares = informacoesComplementares;
  }
}

export class ItensNormal {
  public codigo?: string;

  public descricao?: string;

  public ncm?: string;

  public cest?: string;

  public cfop?: string;

  public valorUnitario?: ValorUnitario | undefined;

  public valor?: number;

  public tributos?: Tributos | undefined;

  public unidade?: Unidade | undefined;

  public quantidade?: QuantidadeValor;

  public informacoesComplementares?: string;

  constructor(
    codigo?: string,
    ncm?: string,
    cest?: string,
    cfop?: string,
    unidade?: Unidade | undefined,
    valorUnitario?: ValorUnitario | undefined,
    valor?: number,
    descricao?: string,
    tributos?: Tributos | undefined,
    quantidade?: QuantidadeValor,
    informacoesComplementares?: string,
  ) {
    this.codigo = codigo;
    this.ncm = ncm;
    this.cest = cest;
    this.cfop = cfop;
    this.unidade = unidade;
    this.valorUnitario = valorUnitario;
    this.valor = valor;
    this.descricao = descricao;
    this.tributos = tributos;
    this.quantidade = quantidade;
    this.informacoesComplementares = informacoesComplementares;
  }
}

export interface Unidade {
  comercial: string;
  tributavel: string;
}

export interface ValorUnitario {
  comercial: number;
  tributavel: number;
}

export interface IcmsSimples {
  origem: string;
  cst: string;
}

export interface Icms {
  origem: string;
  cst: string;
  baseCalculo: BaseCalculo;
  aliquota: number;
  valor?: number;
}
export interface PisSimples {
  cst: string;
}

export interface Pis {
  cst: string;
  baseCalculo: BaseCalculo;
  aliquota: number;
  valor?: number;
  quantidadeVendida?: number;
}
export interface CofinsSimples {
  cst: string;
}

export interface Cofins {
  cst: string;
  baseCalculo: BaseCalculo;
  aliquota: number;
  valor?: number;
  quantidadeVendida?: number;
}
export interface TributosSimples {
  icms: IcmsSimples;
  pis: PisSimples;
  cofins: CofinsSimples;
}

export interface Tributos {
  icms: Icms;
  pis: Pis;
  cofins: Cofins;
  ipi?: Ipi;
}

export interface QuantidadeSimples {
  comercial: number;
  tributavel: number;
}

export interface Ipi {
  codigoEnquadramentoLegal: string;
  cst: string;
  baseCalculo: number;
  aliquota: number;
  unidade: Quantidade;
  valor: number;
}

export interface BaseCalculo {
  modalidadeDeterminacao?: number;
  valor: number;
  quantidade?: number;
}

export interface Quantidade {
  quantidade: number;
  valor: number;
}

export interface QuantidadeValor {
  comercial: number;
  tributavel: number;
}
export interface Financeiro {
  tipodocumento?: string;
  status: number;
  conta_origem: number;
  docfornecedor: string;
  centrocusto?: string;
  pessoa_id: number;
  data_lancamento?: string;
  datavencimento_original?: string;
  datavencimento_real?: string;
  valor: number;
  valor_juros?: number;
  valor_multas?: number;
  valor_acrescimo?: number;
  valor_baixa?: number;
  valor_total: number;
  valor_saldo: number;
  descricao?: string;
  prefixo?: string;
  area?: string;
  anexo?: string;
  formapagamento?: string;
  condicaopagamento?: string;
  historico: string;
  id_filial: number;
}

export interface ContaSaldo {
  saldo: number;
  id_orcamento?: number;
  id_financeiro?: number;
  id_lancamento?: number;
  id_conta: number;
  id_filial: number;
}

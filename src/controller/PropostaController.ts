import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator/check';
import { Workbook } from 'exceljs';
import db from '../database/connection';

export const index = async (req: Request, res: Response) => {
  let proposta = [];

  if (req.params.id) {
    proposta = await db('proposta').select('*').where({ id: req.params.id });
  } else {
    proposta = await db('proposta')
      .select('proposta.*', 'usuarios.nome as nomeUsuario')
      .leftOuterJoin('usuarios', 'proposta.idUsuario', 'usuarios.id')
      .where(req.query);
  }

  return res.status(200).json(proposta);
};

export const create = {
  validations: [
    check('cliente').isString(),
    check('anoVeiculo').isString(),
    check('origemVeiculo').isString(),
    check('destinoVeiculo').isString(),
    check('telefoneCelular').isString(),
    check('enderecoColetaVeiculo').isString(),
    check('enderecoEntregaVeiculo').isString(),
    check('obeservacao').isString(),
    check('orcamentoServico').isString(),
    check('obeservacao').isString(),
    check('prazoEntrega').isString(),
    check('corVeiculo').isString(),
    check('modeloVeiculo').isString(),
    check('idUsuario').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    // check schema validations
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const {
      cliente,
      anoVeiculo,
      origemVeiculo,
      destinoVeiculo,
      telefoneCelular,
      enderecoColetaVeiculo,
      enderecoEntregaVeiculo,
      obeservacao,
      valorTotalVeiculo,
      orcamentoServico,
      coleta,
      entrega,
      prazoEntrega,
      corVeiculo,
      modeloVeiculo,
      idUsuario,
    } = req.body;

    const trx = await db.transaction();

    try {
      const insertedproposta = await trx('proposta').insert({
        cliente,
        anoVeiculo,
        origemVeiculo,
        destinoVeiculo,
        telefoneCelular,
        enderecoColetaVeiculo,
        enderecoEntregaVeiculo,
        obeservacao,
        valorTotalVeiculo,
        orcamentoServico,
        coleta,
        entrega,
        prazoEntrega,
        idUsuario,
        corVeiculo,
        modeloVeiculo,
      });

      await trx.commit();

      return res.status(200).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        message: 'Não foi possivel realizar o cadastro da proposta',
        error,
      });
    }
  },
};

export const update = {
  validations: [
    check('cliente').isString(),
    check('anoVeiculo').isString(),
    check('origemVeiculo').isString(),
    check('destinoVeiculo').isString(),
    check('telefoneCelular').isString(),
    check('enderecoColetaVeiculo').isString(),
    check('enderecoEntregaVeiculo').isString(),
    check('obeservacao').isString(),
    check('orcamentoServico').isString(),
    check('obeservacao').isString(),
    check('prazoEntrega').isString(),
    check('idUsuario').isString(),
    check('corVeiculo').isString(),
    check('modeloVeiculo').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    // check schema validations
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const { id } = req.params;

    const {
      cliente,
      anoVeiculo,
      origemVeiculo,
      destinoVeiculo,
      telefoneCelular,
      enderecoColetaVeiculo,
      enderecoEntregaVeiculo,
      obeservacao,
      valorTotalVeiculo,
      orcamentoServico,
      coleta,
      entrega,
      prazoEntrega,
      idUsuario,
      corVeiculo,
      modeloVeiculo,
    } = req.body;

    const trx = await db.transaction();

    try {
      const updateNcm = await trx('proposta').where('id', id).update({
        cliente,
        anoVeiculo,
        origemVeiculo,
        destinoVeiculo,
        telefoneCelular,
        enderecoColetaVeiculo,
        enderecoEntregaVeiculo,
        obeservacao,
        valorTotalVeiculo,
        orcamentoServico,
        coleta,
        entrega,
        prazoEntrega,
        idUsuario,
        corVeiculo,
        modeloVeiculo,
      });

      await trx.commit();

      return res.status(200).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        message: 'Não foi possível atualizar o cadastro da proposta',
        error,
      });
    }
  },
};

export const delete_value = async (req: Request, res: Response) => {
  await db('proposta').where({ id: req.params.id }).del();
  return res.status(204).send();
};

export const gerarExel = async (req: Request, res: Response) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('My Sheet');
  worksheet.columns = [
    { header: 'cliente', key: 'cliente', width: 30 },
    { header: 'anoVeiculo', key: 'anoVeiculo', width: 30 },
    { header: 'origemVeiculo', key: 'origemVeiculo', width: 30 },
    { header: 'destinoVeiculo', key: 'destinoVeiculo', width: 30 },
    { header: 'telefoneCelular', key: 'telefoneCelular', width: 30 },
    {
      header: 'enderecoColetaVeiculo',
      key: 'enderecoColetaVeiculo',
      width: 30,
    },
    {
      header: 'enderecoEntregaVeiculo',
      key: 'enderecoEntregaVeiculo',
      width: 30,
    },
    { header: 'obeservacao', key: 'obeservacao', width: 30 },
    { header: 'valorTotalVeiculo', key: 'valorTotalVeiculo', width: 30 },
    { header: 'orcamentoServico', key: 'orcamentoServico', width: 30 },
    { header: 'coleta', key: 'coleta', width: 30 },
    { header: 'entrega', key: 'entrega', width: 30 },
    { header: 'obeservacao', key: 'obeservacao', width: 30 },
    { header: 'prazoEntrega', key: 'prazoEntrega', width: 30 },
    { header: 'idUsuario', key: 'idUsuario', width: 30 },
  ];
  worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
  // save under export.xlsx
  await workbook.xlsx.writeFile('export.xlsx');
  return res.status(204).send();
};

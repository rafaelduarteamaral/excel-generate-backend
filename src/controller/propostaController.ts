import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator/check';
import db from '../database/connection';

export const index = async (req: Request, res: Response) => {
  let proposta = [];

  if (req.params.id) {
    proposta = await db('proposta').select('*').where({ id: req.params.id });
  } else {
    proposta = await db('proposta').select('*').where(req.query);
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
    check('dddCelular').isString(),
    check('coletaVeiculo').isString(),
    check('enderecoColetaVeiculo').isString(),
    check('enderecoEntregaVeiculo').isString(),
    check('obeservacao').isString(),
    check('valorTotalVeiculo').isString(),
    check('orcamentoServico').isString(),
    check('coleta').isString(),
    check('entrega').isString(),
    check('obeservacao').isString(),
    check('prazoEntrega').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    // check schema validations
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const { nome, codigo, descricao, id_filial } = req.body;

    const trx = await db.transaction();

    try {
      const insertedproposta = await trx('proposta').insert({
        nome,
        codigo,
        descricao,
        id_filial,
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
    check('dddCelular').isString(),
    check('coletaVeiculo').isString(),
    check('enderecoColetaVeiculo').isString(),
    check('enderecoEntregaVeiculo').isString(),
    check('obeservacao').isString(),
    check('valorTotalVeiculo').isString(),
    check('orcamentoServico').isString(),
    check('coleta').isString(),
    check('entrega').isString(),
    check('obeservacao').isString(),
    check('prazoEntrega').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    // check schema validations
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const { id } = req.params;

    const { nome, codigo, descricao, id_filial } = req.body;

    const trx = await db.transaction();

    try {
      const updateNcm = await trx('proposta').where('id', id).update({
        nome,
        codigo,
        descricao,
        id_filial,
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

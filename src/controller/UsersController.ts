import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import db from '../database/connection';

const secret = 'mysecret';

export const login = async (req: Request, res: Response) => {
  try {
    const usuarios = await db('usuarios')
      .select('*')
      .where({ nome: req.body.usuario, password: req.body.password });
    if (usuarios.length <= 0) {
      return res.status(401).send('Login invalido');
    }
    const { id } = usuarios[0];
    const token = jwt.sign({ id }, secret, {
      expiresIn: '10h',
    });
    return res.status(200).send({ auth: true, token, id });
  } catch (error) {
    return res.status(401).send('Login invalido');
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    let usuarios: any = [];
    if (req.params.id) {
      usuarios = await db('usuarios').select('*').where({ id: req.params.id });
    } else {
      usuarios = await db('usuarios').select('*').where(req.body);
    }
    return res.status(200).send(usuarios);
  } catch (error) {
    return res.status(400).json({
      error: 'Erro ao consultar usuários',
    });
  }
};

export const create = {
  validations: [
    check('nome').isString(),
    check('email').isString(),
    check('password').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const { nome, password, email } = req.body;

    const trx = await db.transaction();

    try {
      const insertedusuariosIds = await trx('usuarios').insert({
        nome,
        password,
        email,
      });

      await trx.commit();
      return res.status(200).send();
    } catch (err) {
      await trx.rollback();
      return res.status(400).json({
        error: 'Unexpected error while creating new usuarios',
      });
    }
  },
};

export const update = {
  validations: [
    check('nome').isString(),
    check('password').isString(),
    check('avatar').isString(),
  ],
  handler: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, password, avatar } = req.body;

    const trx = await db.transaction();

    try {
      const updateUsuario = await trx('usuarios').where('id', id).update({
        nome,
        password,
        avatar,
      });

      await trx.commit();

      return res.status(200).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        message: 'Não foi possivel atualizar o cadastro do usuario',
        error,
      });
    }
  },
};

export const logout = async (req: Request, res: Response) => {
  res.status(200).send({ auth: false, token: null });
};

export const getusuarios = (req: Request, res: Response) => {
  const token: any = req.headers.authorization;

  jwt.verify(token, secret, function (err: any, decoded: any) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Token inválido.' });
    }

    const usuario_id = decoded.id;
    return usuario_id;
  });
};

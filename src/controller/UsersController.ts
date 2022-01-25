import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import db from '../database/connection';

const secret = 'mysecret';

export const login = async (req: Request, res: Response) => {
  try {
    const users = await db('users')
      .select('*')
      .where({ nome: req.body.user, password: req.body.password });
    if (users.length <= 0) {
      return res.status(401).send('Login invalido');
    }
    const { id } = users[0];
    const filial = users[0].id_filial;
    const token = jwt.sign({ id, filial }, secret, {
      expiresIn: '10h',
    });
    return res.status(200).send({ auth: true, token, id, filial });
  } catch (error) {
    return res.status(401).send('Login invalido');
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    let users: any = [];
    if (req.params.id) {
      users = await db('users').select('*').where({ id: req.params.id });
    } else {
      users = await db('users').select('*').where(req.body);
    }
    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).json({
      error: 'Erro ao consultar usuários',
    });
  }
};

export const create = {
  validations: [
    // check('nome').isString(),
    // check('password').isString(),
    // check('avatar').isString(),
    // check('filial').isNumeric(),
  ],
  handler: async (req: Request, res: Response) => {
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
      return res.status(403).send(schemaErrors.array());
    }

    const { nome, password, avatar, filial } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        nome,
        password,
        avatar,
        id_filial: filial,
      });

      await trx.commit();
      return res.status(200).send();
    } catch (err) {
      await trx.rollback();
      return res.status(400).json({
        error: 'Unexpected error while creating new Users',
      });
    }
  },
};

export const update = {
  validations: [
    // check('nome').isString(),
    // check('password').isString(),
    // check('avatar').isString(),
    // check('filial').isNumeric(),
  ],
  handler: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, password, avatar, filial } = req.body;

    const trx = await db.transaction();

    try {
      const updateUsers = await trx('users').where('id', id).update({
        nome,
        password,
        avatar,
        id_filial: filial,
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
}

export const getUsers = (req: Request, res: Response) => {
    var token: any = req.headers['authorization'];

    jwt.verify(token, secret, function (err: any, decoded: any) {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Token inválido.' });
      }

     const usuario_id = decoded.id;
      return usuario_id;
    });
}


import express from 'express';
// import swaggerUi from 'swagger-ui-express'
import apiSchema from '../../api-schema.json';

/*
 buscar exemplos do swagger
 https://github.com/waldemarnt/node-typescript-api/blob/master/src/api-schema.json exemplo de swagger
 */

import * as usersController from '../../controller/UsersController';
import * as PropostaController from '../../controller/PropostaController';

import Mail from '../../services/mail';

import verifyJWT from '../../utils/verifyJWT';

const routes = express.Router();

/**
 * Rotas
 */

/** Swagger documentação */
// routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSchema))

// users
routes.post('/login', usersController.login);
routes.post(
  '/users',
  usersController.create.validations,
  usersController.create.handler,
);
routes.get('/users', verifyJWT, usersController.index);
routes.put(
  '/users',
  usersController.update.validations,
  usersController.update.handler,
);

routes.get('/propostas', PropostaController.index);
routes.get('/propostas/:id', PropostaController.index);

routes.post(
  '/propostas',
  PropostaController.create.validations,
  PropostaController.create.handler,
);
export default routes;

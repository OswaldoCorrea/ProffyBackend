import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); //Instrução para que o express compreenda o formato JSON
app.use(routes);
app.listen(3333);

//GET: Busca dados do servidor
//POST: Insere algum novo registro/informação
//PUT: Da um update em um registro existente
//DELETE: Deleta um registro existente

//Corpo (request body): Dados para criação/manipulação de um registro
//Routes Params: Identificar um recurso dentro da nossa rota. Identifficar qual recurso quero deletar ou alterar, por exemplo um Idade
//ex: users/:id (request.params)

//Query params: paginação, filtros, ordenação (request.query)

//Knex é um querybuilder pra escrever as querys em javascript
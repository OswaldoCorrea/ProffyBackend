import knex from 'knex';
import path from 'path';//módulo do node pra manuzear os caminhos fisicos de uma aplicação

//conceito de migrations - controlam a versão do banco de dados

const db = knex({
    client: 'sqlite3',
    connection:{
        filename:path.resolve(__dirname, 'database.sqlite')//o path resolve , já "resolve" automaticamente a questão das barras para acessar o caminho
    },
    useNullAsDefault: true,
});

export default db;
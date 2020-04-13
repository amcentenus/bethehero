const knex = require('knex');
const configuration = require('../../knexfile');

const dbConfig = process.env.NODE_ENV === 'teste' ? configuration.test : configuration.development;

const db = knex(dbConfig);

module.exports = db;

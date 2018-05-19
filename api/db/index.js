var database_info = require('./database_info');

const { Pool } = require('pg')

const pool = new Pool(database_info.db_info);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}

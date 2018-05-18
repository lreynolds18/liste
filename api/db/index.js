const { Pool } = require('pg')

const pool = new Pool();

module.exports = {
  query: (text, params, callback) => {
    q = pool.query(text, params, callback);
    return q;
  }
}

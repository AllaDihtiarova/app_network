const db = require('../../utils/db');

module.exports = {
  addLog: async (method, path) => {
    await db('logs').insert({
      method,
      path,
    });
  },

  addError: async e => {
    await db('errors').insert({
      errors: e,
    });
  },
};

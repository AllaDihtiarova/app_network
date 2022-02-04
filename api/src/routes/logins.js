const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const logins = await db.select().table('logins');

  res.send(logins);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const login = await db('logins')
    .where('id', id)
    .select('id', 'password', 'phone_number', 'email', 'login');

  res.send(login.length > 0 ? login : `Login with id ${id} not found`);
});

module.exports = router;

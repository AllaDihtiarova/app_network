/* eslint-disable no-return-assign */
const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().table('users'));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(
    await db('users').where('id', id).select('id', 'first_name', 'last_name'),
  );
});

router.post('/', async (req, res) => {
  const {
    password,
    phone_number,
    email,
    verification_code,
    login,
    first_name,
    last_name,
    gender,
  } = req.body;

  await db.transaction(async trx => {
    let logId;

    await db('logins')
      .insert(
        {
          password: `${password}`,
          phone_number: `${phone_number}`,
          email: `${email}`,
          verification_code: `${verification_code}`,
          login: `${login}`,
        },
        'id',
      )
      .transacting(trx)
      .then(id => (logId = id));

    await db('users')
      .insert({
        first_name: `${first_name}`,
        last_name: `${last_name}`,
        gender: `${gender}`,
        login_id: `${logId}`,
      })
      .transacting(trx);
  });

  res.send('User add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await db('users').where('id', id).update(data);

  res.send(`User id ${id} info updated`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await db('users')
    .where('id', id)
    .del('login_id')
    // eslint-disable-next-line no-shadow
    .then(async id => {
      await db('logins').where('id', id[0]).del();
    });

  res.send(`User id ${id} deleted`);
});

module.exports = router;

const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const users = await db.select().table('users');

  res.send(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db('users')
    .where('id', id)
    .select(
      'id',
      'first_name',
      'last_name',
      'birthday',
      'gender',
      'create_date',
    );

  res.send(user.length > 0 ? user : `User with id ${id} not found`);
});

router.post('/', async (req, res) => {
  const {
    password,
    phoneNumber,
    email,
    verificationCode,
    login,
    firstName,
    lastName,
    middleName,
    birthday,
    createDate,
    updateDate,
    cityId,
    gender,
  } = req.body;

  try {
    await db.transaction(async trx => {
      let logId;

      await db('logins')
        .insert(
          {
            password: `${password}`,
            phone_number: `${phoneNumber}`,
            email: `${email}`,
            verification_code: `${verificationCode}`,
            login: `${login}`,
          },
          'id',
        )
        .transacting(trx)
        // eslint-disable-next-line no-return-assign
        .then(id => (logId = id));

      await db('users')
        .insert({
          first_name: `${firstName}`,
          last_name: `${lastName}`,
          middle_name: `${middleName}`,
          birthday: `${birthday}`,
          create_date: `${createDate}`,
          update_date: `${updateDate}`,
          gender: `${gender}`,
          city_id: `${cityId}`,
          login_id: `${logId}`,
        })
        .transacting(trx);
    });
  } catch (e) {
    res.send('Something is wrong');
    return;
  }

  res.send('User add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedUser = await db('users').where('id', id).update(data);

  res.send(
    updatedUser ? `User id ${id} info updated` : `User with id ${id} not found`,
  );
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db('users')
      .where('id', id)
      .del('login_id')
      // eslint-disable-next-line no-shadow
      .then(async id => {
        await db('logins').where('id', id[0]).del();
      });
  } catch (err) {
    res.send(`User id ${id} not found`);
    return;
  }

  res.send(`User id ${id} deleted`);
});

module.exports = router;

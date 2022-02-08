const db = require('../db');

module.exports = {
  getAllUsers: async () => {
    const users = await db.select().table('users');

    if (users.length === 0) {
      return 'No likes!';
    }

    return users;
  },

  getUserById: async id => {
    const user = await db('users')
      .where('id', id)
      .select(
        'id',
        'first_name',
        'last_name',
        'birthday',
        'create_date',
        'gender',
      );

    if (user.length === 0) {
      return `User with id ${id} not found`;
    }

    return user;
  },

  addUser: async (
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
  ) => {
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
          .then(id => {
            logId = id;
          });

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
      return 'User add';
    } catch (e) {
      return e;
    }
  },

  updateUser: async (id, data) => {
    try {
      await db('users').where('id', id).update(data);

      return `User with id ${id} updated`;
    } catch (e) {
      return e;
    }
  },

  deleteUser: async id => {
    try {
      await db('users')
        .where('id', id)
        .del('login_id')
        .then(async loginId => {
          await db('logins').where('id', loginId[0]).del();
        });
      return `User id ${id} deleted`;
    } catch (e) {
      return e;
    }
  },
};

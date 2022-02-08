const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require('../services/store/user.service');

router.get('/', async (req, res) => res.send(await getAllUsers()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await getUserById(id));
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

  res.send(
    await addUser(
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
    ),
  );
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  res.send(await updateUser(id, data));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deleteUser(id));
});

module.exports = router;

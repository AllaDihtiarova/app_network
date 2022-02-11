const router = require('express').Router();
const fs = require('fs/promises');

const fileUpload = require('../middleware/fileUpload');
const asyncErrorHandler = require('../services/asyncErrorHandler');

const { cloudinary } = require('../utils/cloudinary');
const {
  getAllUsers,
  getUserById,
  getAvatar,
  addUser,
  changeAvatar,
  updateUser,
  deleteUser,
  deleteAvatar,
} = require('../services/store/user.service');

router.get(
  '/',
  asyncErrorHandler(async (req, res) => res.send(await getAllUsers())),
);

router.get(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getUserById(id));
  }),
);

router.get(
  '/:id/avatar',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getAvatar(id));
  }),
);

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
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
  }),
);

router.post(
  '/:id/avatar',
  fileUpload.single('avatar'),
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const file = req.file.path;

    const isAvatar = await getAvatar(id);

    if (isAvatar) {
      cloudinary.uploader.destroy(isAvatar.avatar_id, () => {});
    }

    try {
      await cloudinary.uploader.upload(
        file,
        {
          upload_preset: 'socialNetwork',
        },
        (err, result) => {
          const link = result.url;
          const publicId = result.public_id;
          changeAvatar(id, link, publicId);
          res.send({
            success: true,
            result,
          });
        },
      );
      await fs.unlink(file);
      return 'ok';
    } catch (error) {
      return error;
    }
  }),
);

router.put(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    res.send(await updateUser(id, data));
  }),
);

router.delete(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await deleteUser(id));
  }),
);

router.delete(
  '/:id/avatar',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    const isAvatar = await getAvatar(id);

    if (isAvatar) {
      cloudinary.uploader.destroy(isAvatar.avatar_id, () => {});
    }

    res.send(await deleteAvatar(id));
  }),
);

module.exports = router;

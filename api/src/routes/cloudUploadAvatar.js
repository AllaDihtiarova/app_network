const router = require('express').Router();
const fs = require('fs/promises');

const fileUpload = require('../middleware/fileUpload');

const { cloudinary } = require('../utils/cloudinary');
const {
  getAvatar,
  changeAvatar,
  deleteAvatar,
} = require('../services/store/avatar.service');

router.get('/:id/avatar', async (req, res) => {
  const { id } = req.params;

  res.send(await getAvatar(id));
});

router.post('/:id', fileUpload.single('avatar'), async (req, res) => {
  const { id } = req.params;
  const file = req.file.path;

  try {
    await cloudinary.uploader.upload(
      file,
      {
        upload_preset: 'socialNetwork',
      },
      (err, result) => {
        const link = result.url;
        changeAvatar(id, link);
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
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deleteAvatar(id));
});

module.exports = router;

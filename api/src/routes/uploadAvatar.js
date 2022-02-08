const router = require('express').Router();
const path = require('path');
const fs = require('fs/promises');
const fS = require('fs');

const fileUpload = require('../middleware/fileUpload');

router.post('/:id', fileUpload.single('avatar'), async (req, res) => {
  const { id } = req.params;
  const { path: tmpUpload } = req.file;
  const avatarFile = `avatar${path.extname(req.file.originalname)}`;

  const avatarDir = path.join(__dirname, '../../images/avatars');
  const dirWithId = path.join(avatarDir, id);
  const resultUpload = path.join(avatarDir, id, avatarFile);
  try {
    if (!fS.existsSync(dirWithId)) {
      fS.mkdirSync(dirWithId);
    }
    await fs.rename(tmpUpload, resultUpload);
    res.json(req.file);
  } catch (error) {
    await fs.unlink(tmpUpload);
    res.json('Directory already exist');
  }
});

module.exports = router;

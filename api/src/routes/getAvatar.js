const router = require('express').Router();
const path = require('path');

router.get('/:id/images/avatars', (req, res) => {
  const { id } = req.params;
  const avatarDir = path.join(__dirname, '../../images/avatars');
  const resultUpload = path.join(avatarDir, id, 'avatar.jpg');

  res.sendFile(resultUpload);
});

module.exports = router;

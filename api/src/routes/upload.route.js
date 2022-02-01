const router = require('express').Router();
const fileUpload = require('../middleware/file');

router.post('/', fileUpload.single('avatar'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

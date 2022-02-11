const cloudinary = require('cloudinary').v2;

const {
  cloudServiceName,
  cloudServiceKey,
  cloudServiceSecret,
} = require('../config/config');

cloudinary.config({
  cloud_name: cloudServiceName,
  api_key: cloudServiceKey,
  api_secret: cloudServiceSecret,
});

module.exports = {
  cloudinary,
};

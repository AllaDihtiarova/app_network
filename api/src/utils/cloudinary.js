const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dmvrnfejn',
  api_key: '937978325791214',
  api_secret: 'aiLNQSYVfoveCfJYzUICkAp0o1I',
});

module.exports = {
  cloudinary,
};

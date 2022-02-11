const { addError } = require('./store/logService');

module.exports = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .then(() => next)
    .catch(error => {
      next(addError(`${error.stack}`));
    });
};

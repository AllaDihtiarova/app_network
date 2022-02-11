module.exports = writeLog => (req, res, next) => {
  writeLog(req.method, req.path).then(() => {
    next();
  });
};

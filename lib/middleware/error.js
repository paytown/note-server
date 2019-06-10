// eslint-disable-next-line
module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Server Error';
  
  console.error(err);
  
  res
    .status(status)
    .send({ status, message });
};


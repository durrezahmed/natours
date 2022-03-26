module.exports = (fn) => {
  return (req, res, next) => {
    // this this way we get rid of the catch block
    fn(req, res, next).catch(next);
  };
};

const ClientErrorDatabase = require("../utils/errors/ClientError");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (!["Character", "Planet", "Film"].includes(model)) {
    throw new ClientErrorDatabase("Wrong model", 400);
  }
  return next();
};

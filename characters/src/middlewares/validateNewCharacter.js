const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { id } = req.body;
  if (id) return next();
  else throw new ClientError("Para crear el personaje es necesario un id", 401);
};

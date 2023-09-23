const store = require("../database/index");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
};

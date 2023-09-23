const store = require("../database/index");

module.exports = async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  console.log(model);
  res.status(200).json(response);
};

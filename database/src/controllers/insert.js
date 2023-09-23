const store = require("../database/index");

module.exports = async (req, res) => {
  const { model } = req.params;
  const data = req.body;
  const insertedData = store[model].insert(data);
  res.status(201).json({ insertedData });
};

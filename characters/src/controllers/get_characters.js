const Character = require("../data");
const { response } = require("../utils");

async function getCharacters(req, res) {
  const characters = await Character.list();
  response(res, 200, characters);
}

module.exports = getCharacters;

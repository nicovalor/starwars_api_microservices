const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./get_characters")),
  postCharacter: catchedAsync(require("./post_characters")),
};

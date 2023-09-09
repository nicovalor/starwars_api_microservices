const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./get_planets")),
};

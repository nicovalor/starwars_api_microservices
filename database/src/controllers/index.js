const catchedAsync = require("../utils/catchedAsync");

module.exports = {
  list: catchedAsync(require("./list")),
  get: catchedAsync(require("./get")),
  insert: catchedAsync(require("./insert")),
};

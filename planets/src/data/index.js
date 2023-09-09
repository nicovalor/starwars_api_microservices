const plantes = require("./planets.json");

module.exports = {
  list: async () => {
    return plantes;
  },
};

const morgan = require("morgan");

const express = require(express);

const server = express();

server.use(express.json());
server.use(morgan("dev"));

modules.exports = server;
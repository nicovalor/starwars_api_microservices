const morgan = require("morgan");

const router = require("./database/routes");

const express = require("express");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);
server.use((err, req, res, next) => {
  res.status(err.statusCode).json({ error: true, message: err.message });
});

module.exports = server;

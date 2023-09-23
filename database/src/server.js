const morgan = require("morgan");

const router = require("./database/routes");

const express = require("express");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);

module.exports = server;

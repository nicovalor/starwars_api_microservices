const express = require("express");
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/characters", require("./routes"));
server.use("*", (req, res) => {
  res.status(404).send("404 not found");
});
server.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    error: true,
    message: err.message,
  });
});

module.exports = server;

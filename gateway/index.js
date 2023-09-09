const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
const server = express();
const PORT = 8000;

server.use(morgan("dev"));
server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);

server.use(
  "/films",
  createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true,
  })
);

server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://localhost:8003",
    changeOrigin: true,
  })
);

server.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});

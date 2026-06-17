const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL || "http://users-service:3001";
const ORDERS_SERVICE_URL = process.env.ORDERS_SERVICE_URL || "http://orders-service:3002";

app.get("/", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "running",
    message: "API Gateway is working"
  });
});

app.get("/users", async (req, res) => {
  const response = await axios.get(`${USERS_SERVICE_URL}/users`);
  res.json(response.data);
});

app.get("/orders", async (req, res) => {
  const response = await axios.get(`${ORDERS_SERVICE_URL}/orders`);
  res.json(response.data);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "api-gateway"
  });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
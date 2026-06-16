const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const orders = [
  { id: 1, userId: 1, item: "Laptop", status: "Processing" },
  { id: 2, userId: 2, item: "Kubernetes Book", status: "Delivered" }
];

app.get("/", (req, res) => {
  res.json({
    service: "orders-service",
    status: "running",
    message: "Orders Service is working"
  });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "orders-service"
  });
});

app.listen(PORT, () => {
  console.log(`Orders service running on port ${PORT}`);
});
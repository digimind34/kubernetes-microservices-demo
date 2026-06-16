const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const users = [
  { id: 1, name: "Babatunde", role: "DevOps Engineer" },
  { id: 2, name: "Digimind34", role: "Kubernetes Learner" }
];

app.get("/", (req, res) => {
  res.json({
    service: "users-service",
    status: "running",
    message: "Users Service is working"
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "users-service"
  });
});

app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`);
});
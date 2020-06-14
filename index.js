const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ message: "hello world 2" });
});

app.get("/users", (req, res) => {
  return res.json({ users: [] });
});

app.listen(3333, () => {
  console.log("Server running!");
});

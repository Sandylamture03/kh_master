const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.listen(port, (_) => {
  console.log("listening on port " + port);
});

app.get("/", (req, res) => {
  res.json({ message: "hello world", name: "world" });
});

app.get("/login", (req, res) => {
  res.json({ message: "login", name: "login" });
});

app.post("/epi1", (req, res) => {
  res.json({ message: "epi1", name: "welcome to post" });
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const options = {
  origin: "https://localhost:3001",
};

app.use(cors(options));

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

app.get("/add", (req, res) => {
  console.log(req.query.num1);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({
    result: num1 + num2,
  });
});

app.get("/sub", (req, res) => {
  // console.log(req.query.num1);
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  res.json({ result: num1 - num2 });
});

app.get("/mul", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({ result: num1 * num2 });
});

app.get("/div", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.json({ result: num1 / num2 });
});

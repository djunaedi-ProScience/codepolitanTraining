const path = require("path");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/t/:tag", (req, res) => {
  const { tag } = req.params;
  res.render("tag", { tag });
});

app.get("/rend", (req, res) => {
  const num = Math.floor(Math.random() * 10 + 1);
  res.render("random", { random: num });
});

app.get("/cats", (req, res) => {
  const cats = ["nigga", "puta", "inamo", "anjing"];
  res.render("cats", { cats });
});

app.listen(8080, () =>
  console.log("saya berjalan di port http://localhost:8080")
);

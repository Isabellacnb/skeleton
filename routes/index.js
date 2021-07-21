var express = require("express");
var app = express();

app.get("/", (req, res) => {
  // logica para obtener el nombre del usuario
  var user = "Isabella";
  res.render("pages/home", { title: "Home", usuario: user });
  // res.send("Bienvenido a home");
});

module.exports = app;

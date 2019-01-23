const express = require("express");
const db = require("../db/db");
const { json } = require("body-parser");

const app = express();
app.use(json());

app.get("/api/test", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "test retrieved",
    test: db.test
  });
});

app.get("/api/types", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "types retrieved",
    types: db.types
  });
});

app.get("/api/types/name/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const nameQuery = db.types.filter((e, i) => {
    return e.name == name;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${name} retrieved`,
    types: nameQuery
  });
});

app.get("/api/types/alias/:alias", (req, res) => {
  const alias = req.params.alias.toLowerCase();
  const aliasQuery = db.types.filter((e, i) => {
    return e.alias == alias;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${alias} retrieved`,
    types: aliasQuery
  });
});



const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

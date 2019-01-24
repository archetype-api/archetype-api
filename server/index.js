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
    return e.name == name || e.alias == name;
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

app.get("/api/types/role/:role", (req, res) => {
  const role = req.params.role.toLowerCase();
  const roleQuery = db.types.filter((e, i) => {
    return e.role == role;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${role} retrieved`,
    types: roleQuery
  });
});

app.get("/api/types/aspect/:aspect", (req, res) => {
  const aspect = req.params.aspect.toLowerCase();
  const aspectQuery = db.types.filter((e, i) => {
    return e.aspect == aspect;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${aspect} retrieved`,
    types: aspectQuery
  });
});

app.get("/api/types/drive/:drive", (req, res) => {
  const drive = req.params.drive.toLowerCase();
  const driveQuery = db.types.filter((e, i) => {
    return e.drive == drive;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${drive} retrieved`,
    types: driveQuery
  });
});

app.get("/api/types/method/:method", (req, res) => {
  const method = req.params.method.toLowerCase();
  const methodQuery = db.types.filter((e, i) => {
    return e.method == method;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${method} retrieved`,
    types: methodQuery
  });
});

app.get("/api/types/shadow/:shadow", (req, res) => {
  const shadow = req.params.shadow.toLowerCase();
  const shadowQuery = db.types.filter((e, i) => {
    return e.shadow == shadow;
  });
  res.status(200).send({
    success: "true",
    message: `archetype of ${shadow} retrieved`,
    types: shadowQuery
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

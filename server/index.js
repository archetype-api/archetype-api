const express = require("express");
const db = require("../db/db");

const app = express();

app.get("/api/test", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "test retrieved",
    test: db
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

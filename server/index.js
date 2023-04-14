const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const { sequelize, connect } = require("./database/sequelize");

// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

// All endpoints here
app.get("/retrieve/", async (req, res) => {
  let data = await sequelize.query("SELECT count FROM clicks WHERE id = 1;");
  res.status(200).json({ count: data[0][0].count });
});

app.get("/increment/", async (req, res) => {
  let data = await sequelize.query(
    "UPDATE clicks SET count = count + 1 WHERE id = 1 RETURNING count;"
  );
  console.log(data);
  res.status(200).json({ count: data[0][0].count });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

sequelize.connect;

// connection to port
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Robin:Server listening on port ${PORT}`);
});

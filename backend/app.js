const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const data = require("./data");

app.use(express.static("./public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/api/v1/cities", (req, res) => {
  res.status(200).json(data);
});

app.get("/api/v1/cities/:id", (req, res) => {
  const { id } = req.params;
  const newData = data.find((city) => {
    return city.id === Number(id);
  });
  if (!newData) {
    return res.status(404).json({ success: false, msg: `city with id ${id} does not exist` });
  }
  return res.status(200).json(newData);
});

app.all("*", (req, res) => {
  res.status(404).send(`Cannot GET ${req.url}`);
});

app.listen(5000, () => {
  console.log("listening on port 5000....");
});

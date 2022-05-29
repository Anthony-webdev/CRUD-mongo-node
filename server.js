const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config({ path: ".env" });
const port = process.env.port || 8080;

// log requests
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Crud appli");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

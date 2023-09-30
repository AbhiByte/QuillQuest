const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");
mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./routes/CreateUser.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

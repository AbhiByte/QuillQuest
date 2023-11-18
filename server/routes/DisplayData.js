const express = require("express");
const router = express.Router();

router.post("/bookData", (req, res) => {
  try {
    console.log(global.favbooks);
    res.send([global.favbooks]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;

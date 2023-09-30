const express = require("express");
const router = express.Router;
const Book = require("../models/books.js");

router.post("/createbook", async (req, res) => {
  try {
    Book.create({
      category: "nonfiction",
      title: "Into Thin Air",
      author: "John Krakeur",
      goodreads: "https://www.goodreads.com/book/show/1898.Into_Thin_Air",
    });
  } catch (error) {}
});

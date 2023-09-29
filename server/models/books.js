const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    goodreads: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", booksSchema);

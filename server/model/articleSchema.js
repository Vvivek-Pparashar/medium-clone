const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title to your blog"],
  },
  feed: {
    type: String,
    required: [true, "Please add a title to your blog"],
  },
  img: {
    type: String,
    required: [true, "Please add a title to your blog"],
  },
  content: {
    type: String,
    required: [true, "Can't publish empty blog"],
  },
  likes: {
    type: Number,
    default: 0,
  },

  comments: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Blog", blogSchema);

const express = require("express");
const { getBlogs, postBlog, putBlog, deleteBlog, getBlog } = require("../controllers/article.ctrl");
const router = express.Router();

router.route("/").get(getBlogs).post(postBlog);
router.route("/:id").put(putBlog).delete(deleteBlog).get(getBlog);

module.exports = router
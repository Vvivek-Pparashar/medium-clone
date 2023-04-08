const asyncHandler = require("express-async-handler");
const Blog = require("../model/articleSchema");

//@desc     get all blogs
//@route    GET /api/blogs
//@access   public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

//@desc     get blog by id
//@route    GET /api/blogs/:id
//@access   public

const getBlog = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const blog = await Blog.findOne({ _id: taskId });

  if (!blog) {
    return res.status(404).json({ msg: "No blog for this id" });
  }
  res.status(200).json({ blog });
});

//@desc     post a blog
//@route    POST /api/blogs
//@access   private
const postBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("Blog details missing");
  }

  const blog = await Blog.create(req.body);

  res.status(201).json(blog);
});

//@desc     update a blog
//@route    PUT /api/blogs/:id
//@access   private

const putBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBlog);
});

//@desc     delete a blog
//@route    PUT /api/blogs/:id
//@access   private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    console.log("vivek")
    res.status(404);
    throw new Error("Blog not found");
  }

  await Blog.findOneAndDelete({ _id: blog });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  getBlog,
  postBlog,
  putBlog,
  deleteBlog,
};

const mongoose = require('mongoose');
const BlogSchema = require('../models/BlogSchema');

// get all blogs
async function getAllBlogs(req, res) {
  try {
    const blogsSaved = await BlogSchema.find();

    if (!blogsSaved) {
      return res.status(404).json({
        success: false,
        message: 'There are no blogs now',
      });
    }
    res.status(200).json({
      success: true,
      blogs: blogsSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
      error: error,
    });
  }
}

// add new blog
async function addNewBlog(req, res) {
  console.log(req.body);
  const { title, body } = req.body;
  const currentDate = new Date();
  const newBlog = new BlogSchema({
    title,
    body,
    createdAt: currentDate,
    updatedAt: currentDate,
  });

  try {
    await newBlog.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }

  return res.status(201).json({
    success: true,
    message: 'New blog created successfully',
    blog: newBlog,
  });
}

// delete a blog
async function deleteBlog(req, res) {
  const id = req.params.id;
  try {
    const findBlog = await BlogSchema.findByIdAndDelete(id);
    if (!findBlog) {
      return res.status(404).json({
        success: false,
        message: "We couldn't find the blog you are trying to delete",
      });
    }
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      blog: findBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error,
    });
  }
}

// update a blog
async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, body } = req.body;
  const updatedAt = new Date();
  const updatedBlog = { title, body, updatedAt };

  try {
    const findOriginalBlog = await BlogSchema.findById(id);
    const findBlog = await BlogSchema.findByIdAndUpdate(id, updatedBlog, {
      new: true,
    });
    if (!findBlog) {
      return res.status(404).json({
        success: false,
        message: "We couldn't find the blog you are trying to update",
      });
    }
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      blog: findOriginalBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error,
    });
  }
}

module.exports = {
  getAllBlogs,
  addNewBlog,
  deleteBlog,
  updateBlog,
};

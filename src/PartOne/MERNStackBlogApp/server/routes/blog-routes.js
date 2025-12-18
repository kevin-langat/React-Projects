const express = require('express');
const router = express.Router();
const {
  addNewBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
} = require('../controllers/blog-controller');

router.get('/blogs', getAllBlogs);
router.post('/add-blog', addNewBlog);
router.delete('/delete-blog/:id', deleteBlog);
router.put('/update-blog/:id', updateBlog);

module.exports = router;

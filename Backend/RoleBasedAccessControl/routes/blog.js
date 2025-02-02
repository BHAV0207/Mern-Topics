const express = require('express');
const authenticate = require("../middleware/jwtMiddleware"); // if a jwt auth wsa present in the request, it will decode it and attach the user object to the request object
const authorize = require("../middleware/roleMiddleware"); // Import RBAC middleware
const router = express.Router();
const BlogPost = require("../models/posts");  // Import the BlogPost model , if it exist in the models folder

//  only ediiors and admins can create a blog post
router.post("/create", authenticate, authorize(["admin", "editor"]), async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await BlogPost.create({ title, content, userId: req.user.id });

    res.status(201).json({ message: "Blog post created", post: newPost });
  } catch (err) {
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
});

// 🔒 Only "admin" can delete posts
router.delete("/:id", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPost.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await post.destroy();
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete post", error: err.message });
  }
});

module.exports = router;
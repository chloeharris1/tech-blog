const express = require('express');
const router = express.Router();
const {User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all posts
router.get('/', async (req,res) => {
    const postData = await Post.findAll().catch((err) => {
        res.json(err);
    });
    const posts = postData.map((post) => post.get({plain: true}));
    res.render('home', {posts});
})


module.exports = router;
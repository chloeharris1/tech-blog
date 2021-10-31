const router = require('express').Router();
const { Post, User, Comment} = require('../../models');


// Find all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Blog.findAll({
      include: [User, Comment],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find post by ID
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, Comment],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new post
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user.id
    })
    res.status(200).json(postData)
  } catch(err) {
      console.log(err);
      res.status(400).json({ message: "An error occurred", err: err });
    };
});

// Update post by ID
router.put('/:id', async (req, res) => {
  try {
    const postData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post by ID
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const { Post } = require('../models');

const postdata = [
  {
    title: 'ABC',
    content: 'Always Be Coding',
  },
  {
    title: 'Hello',
    content: 'This blog is great!',
  },
  {
    title: 'Better than Reddit',
    content: 'No morons here!',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
const { Post } = require('../models');

const postdata = [
  {
    title: 'ABC',
    content: 'Always Be Coding',
    user_id: 1
  },
  {
    title: 'Hello',
    content: 'This blog is great!',
    user_id: 2
  },
  {
    title: 'Better than Reddit',
    content: 'No morons here!',
    user_id: 3
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
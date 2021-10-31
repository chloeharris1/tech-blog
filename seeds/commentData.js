const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great website!',
    user_id: 1
  },
  {
    comment_text: 'Love this blog!',
    user_id: 2
  },
  {
    comment_text: 'Helpful resource!',
    user_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
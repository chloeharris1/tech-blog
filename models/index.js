// Gather all models and export them for use

const User = require('./User'); 
const Post = require('./Post');
const Comment = require('Comment'); 

// Create associations between the models

// User-Post 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post-User
Post.belongsTo(User, {
    foreignKey: 'user_id'
}); 

// Comment-User 
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

// Comment-Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User-Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
});

// Post-Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// Export modules 
module.exports = { User, Post, Comment};

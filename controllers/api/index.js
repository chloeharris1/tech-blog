const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const postRoutes = require('./postRoutes');
router.use('/users', postRoutes);

const commentRoutes = require('./commentRoutes');
router.use('/users', commentRoutes);

module.exports = router;
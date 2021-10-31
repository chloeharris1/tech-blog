const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const postRoutes = require('./postRoutes');
router.use('/users', postRoutes);

module.exports = router;
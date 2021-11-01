const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homepageRoutes = require('./homepageRoutes.js');
router.use('api', homepageRoutes);

const dashboardRoutes = require('./dashboardRoutes.js');
router.use('api', dashboardRoutes);

module.exports = router;
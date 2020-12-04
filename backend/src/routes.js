const express = require('express');

const authController = require('./app/controllers/authController');
const gameController = require('./app/controllers/gameController');
const reviewController = require('./app/controllers/reviewController');

const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();
router.use(authMiddleware);

routes.post('/register',authController.register);
routes.post('/authenticate',authController.authenticate);
routes.post('/games/create', upload.array('imageUrl'));

module.exports = routes;
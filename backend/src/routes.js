const express = require('express');
const multer = require('multer');
const uploadConfig = require('./app/config/upload');


const authController = require('./app/controllers/authController');
const gameController = require('./app/controllers/gameController');
const reviewController = require('./app/controllers/reviewController');

const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.use(authMiddleware);

routes.post('/register',authController.register);
routes.post('/authenticate',authController.authenticate);

routes.get('/games',gameController.index);
routes.post('/games/create', upload.array('imageUrl'),gameController.create);

routes.get('/reviews/:name',reviewController.index);
routes.post('/reviews/create',reviewController.create);
module.exports = routes;
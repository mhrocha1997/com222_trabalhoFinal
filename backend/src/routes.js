const express = require('express');
const multer = require('multer');
const uploadConfig = require('./app/config/upload');

const authController = require('./app/controllers/authController');
const gameController = require('./app/controllers/gameController');
const reviewController = require('./app/controllers/reviewController');

const auth = require('./app/middlewares/auth');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/register',authController.register);
routes.post('/authenticate',authController.authenticate);

routes.get('/games',gameController.index);
routes.get('/games/topRated',gameController.topRated);
routes.post('/games/create', auth, upload.array('imageUrl'),gameController.create);
routes.post('/games/search', gameController.search);
routes.delete('/games/delete/:id', auth,gameController.delete);

routes.get('/reviews/:name',reviewController.index);
routes.post('/reviews/create', reviewController.create);

module.exports = routes;
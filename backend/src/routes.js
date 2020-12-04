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

routes.get('/games',auth,gameController.index);
routes.post('/games/create',auth, upload.array('imageUrl'),gameController.create);

routes.get('/reviews/:name',auth,reviewController.index);
routes.post('/reviews/create',auth,reviewController.create);


module.exports = routes;
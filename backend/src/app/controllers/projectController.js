const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/',(req,res)=>{
    res.send({ok: true});
});
11970550254
module.exports = app => app.use('/projects', router);
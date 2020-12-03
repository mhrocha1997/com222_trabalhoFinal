const express = require('express');
const authMiddleware = require('../middlewares/auth');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const Game = require('../model/game');

const router = express.Router();
const upload = multer(uploadConfig);

router.use(authMiddleware);

router.get('/',(req,res)=>{
    res.send({ok: true,user: req.userId});
});

router.get('/:gameId',async(req,res)=>{
    res.send({ok: true,user: req.userId});
});

router.post('/', upload.array('imageUrl'), async (req,res)=>{
    try{
        
        const {
            name,
            console,
            summary,
            developer,
            genre,
        } = req.body;

        const reqImage = req.files;

        const imageUrl = reqImage.map(image=>{
            return {path: image.filename}
        });
        const data = {
            name,
            console,
            summary,
            developer,
            genre,
            imageUrl
        }
        const game = await Game.create(data);

        return res.send({game});
    }catch(err){
        comsole.log(err);
        return res.status(400).send({error: "error creating new project"})
    }
});

router.put('/:GameId',(req,res)=>{
    res.send({ok: true,user: req.userId});
});

router.delete('/',(req,res)=>{
    res.send({ok: true,user: req.userId});
});
module.exports = app => app.use('/games', router);
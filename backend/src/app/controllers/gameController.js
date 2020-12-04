const Game = require('../model/game');

module.exports={
    async index(req,res){
        try{
            const games = await Game.find();
    
            return res.send(({games}));
        }catch(err){
            return res.status(400).send({error: 'Error loading games'});
        }
    },
    async create(req,res){
        try{
        
            const {
                name,
                console,
                summary,
                developer,
                genre,
            } = req.body;
    
            const imageUrl = req.files[0].path;
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
            console.log(err);
            return res.status(400).send({error: "error creating new project"})
        }
    },
}



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
                rate
            } = req.body;
    
            const imageUrl = req.files[0].path;

            const data = {
                name,
                console,
                summary,
                developer,
                genre,
                imageUrl,
                rate
            }
            const game = await Game.create(data);
    
            return res.send({game});
        }catch(err){
            console.log(err);
            return res.status(400).send({error: "error creating new project"})
        }
    },

    async delete(req,res){
        try{
            await Game.findByIdAndRemove(req.params.id);

            return res.send();
        }catch(err){
            return res.status(400).send({error: 'Error deleting Project'});
        }
    },
    async topRated(req,res){
        try{
            const games = await Game.find().sort({rate: -1});
            let bestGames = [];
            for(let i = 0; i<3; i++){
                bestGames.push(games[i]);
            }
            return res.send(bestGames);
        }catch(err){

        }
    }
}



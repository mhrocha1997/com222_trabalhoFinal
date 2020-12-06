const { search } = require('../..');
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
                imageUrl
            } = req.body;
            const reviews = [];
            const reviewsSize = 0
            const rate = 0;

            const data = {
                name,
                console,
                summary,
                developer,
                genre,
                imageUrl,
                rate,
                reviews,
                reviewsSize
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
            const { conso } = req.query;
            const games = await Game.find().sort({rate: -1});
            let bestGames = [];
            let i = 0;
            let k = 0;

            while(k < 3 && i < games.length){
                console.log(games[i].console);
                console.log(conso);
                if(conso == games[i].console){
                    k++;
                    bestGames.push(games[i]);
                }
                i++;
            }

            return res.json(bestGames);
        }catch(err){
            return res.status(400).send({error: err});
        }
    },

    async search(req, res){
        try{
            const { searchObject, conso } = req.body;
            console.log(conso, searchObject);
            let result = [];
            result.push(await Game.find({ name: searchObject, console: conso }));
            result.push(await Game.find({ console:conso, developer: { $regex: searchObject }}));
            result.push(await Game.find({ console:conso, genre:searchObject }));
            console.log(result);
            return res.json(result)
        }catch(err){
            console.log(err);
            return res.status(400).send({error: 'Search Error'});
        }
    }
}



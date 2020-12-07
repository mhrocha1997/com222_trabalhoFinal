const { search } = require('../..');
const Game = require('../model/game');

module.exports={
    async index(req,res){
        try{
            const games = await Game.find();
            return res.json(games);
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

    async complete(req, res){
        try{
            const { conso } = req.body;
            let result = [];
            let aux = await Game.find({ console: conso });
            aux.map((i)=>{
                result.push(i.name);
                result.push(i.developer);
                result.push(i.genre);
            });
            return res.json(result);
        }catch(err){
            return res.status(400).send({error: 'Search Error'});
        }
    },

    async search(req, res){
        try{
            const { conso, searchObject } = req.body;
            let result = [];
            result = result.concat(result, await Game.find({ name: searchObject, console: conso }));
            result = result.concat(result, await Game.find({ console: conso, developer: searchObject }));
            result = result.concat(result, await Game.find({ console: conso, genre: searchObject }));
            return res.json(result);
        }catch(err){
            return res.status(400).send({error: 'Search Error'});
        }
    }
}
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
        let { name, console, summary, developer, genre, imageUrl } = req.body;
        try{
            const reviews = [];
            const reviewsSize = 0;
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
            };
            const game = await Game.create(data);
    
            return res.json(game);
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
            let list = new Set();
            let aux = await Game.find({ name: { $regex: searchObject }, console: conso });
            for(let i = 0; i < aux.length; i++){
                list.add(aux[i]);
            }
            aux = await Game.find({ console: conso, developer: { $regex: searchObject }});
            for(let i = 0; i < aux.length; i++){
                list.add(aux[i]);
            }
            aux = await Game.find({ console: conso, genre: { $regex: searchObject }});
            for(let i = 0; i < aux.length; i++){
                list.add(aux[i]);
            }

            for(let i of list){
                result.push(i);
            }
            
            return res.json(result);
        }catch(err){
            return res.status(400).send({error: 'Search Error'});
        }
    }
}
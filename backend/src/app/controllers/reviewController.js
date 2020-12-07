const Review = require('../model/review');
const Game = require('../model/game');
const User = require('../model/user');

module.exports = {
    async index(req,res){
        try{
            const {name} = req.query;
            let reviews = await Review.find({ name });
            let game = await Game.findOne({ name })
            return res.json([game, reviews]);
        }catch(err){
            return res.status(400).send({error: err});
        }
    },
    
    async create(req,res){
        try{
            const {
                rate,
                text,
                name,
                email
            } = req.body;

            let user = await User.findOne({ email });
            if(!user){
                return res.status(400).send({error: 'User not found'});
            }

            let game = await Game.findOne({ name });
            if(!game){
                return res.status(400).send({error: 'Game not found'});
            }

            const review = await Review.create( {rate, text, email, name} );
            user.reviews.push(review._id);
            game.reviews.push(review._id);
            game.reviewsSize += 1;
            if(game.reviewsSize == 1){
                game.rateAux = rate;
                game.rate = rate;
            }else{
                game.rateAux += rate;
                game.rate = (game.rateAux/game.reviewsSize).toFixed(1);
            }
            game.save();
            await Game.find().sort({rate: -1});

            return res.json({ message:"Review cadastrado." });
        }catch(err){
            return res.status(400).send({error: err});
        }
    },
}

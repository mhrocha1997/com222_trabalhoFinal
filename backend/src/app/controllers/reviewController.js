const Review = require('../model/review');

module.exports = {
    
    async index(req,res){
        try{
            let reviews = await Review.find({ game: req.params.name})
            return res.json(reviews);
        }catch(err){
            return res.status(400).send({error: err});
        }
    },
    
    async create(req,res){
        try{
            const review = await new Review.create(req.body);
            return res.json({ message:"Review cadastrado." })
        }catch(err){
            return res.status(400).send({error: err});
        }
    },

    
}

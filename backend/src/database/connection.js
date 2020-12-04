const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://games:games@omnistack.ekd7k.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false});
mongoose.Promise = global.Promise;

module.exports = mongoose;
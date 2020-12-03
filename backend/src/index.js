const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/uploads',express.static(path.join(__dirname,'..','..','uploads')));
require('./app/controllers/index')(app);

app.listen(3000);
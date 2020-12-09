const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors());

app.use('/uploads',express.static(path.join(__dirname,'..','..','uploads')));

app.use(express.json());
app.use(routes);

app.listen(3000);

module.exports = app;
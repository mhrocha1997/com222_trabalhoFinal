const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use('/uploads',express.static(path.join(__dirname,'..','..','uploads')));

app.use(express.json());
app.use(routes);
app.use(cors());
app.listen(3000);

module.exports = app;
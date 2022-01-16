const express = require('express');
const { response } = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.czdnu.mongodb.net/week10?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

app.use(routes);

app.listen(3000);


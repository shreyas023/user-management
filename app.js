const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars'); // Require express-handlebars module
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//parsing middleware
//parse applications/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json
app.use(bodyParser.json());
//static files
app.use(express.static('public'));

//templating engine
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./views');

const routes = require('./server/routes/user');
app.use('/',routes);

app.listen(port, ()=>console.log(`Listening on port ${port}`));

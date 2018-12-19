var express = require('express'),
cors = require('cors'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route


app.listen(port);
console.log('All list RESTful API server start on:'+port);
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var port =process.env.PORT || 3000;
var routes = require('./api/routes'); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

routes(app);
app.listen(port,function(){ console.log('Server started on port: ' + port); });

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var bodyParser = require('body-parser');
var path = require('path');
var pathPublic = path.resolve(__dirname, "public");
// var multer = require('multer');
var morgan = require('morgan');


// Controllers
var coreType = require('./controllers/coreType');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var handlebars = require('express3-handlebars')
		.create({defaultLayout:'main'});
var body = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 9000);
app.use(express.static(pathPublic));

app.use(morgan('dev'));

// Routes:
app.get('/', coreType.home);

// custom 404 page
app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500);
	res.render('500');
});


// Start the server
app.listen(app.get('port'), function(){
  console.log("Live at Port " + app.get('port') 
  	+ " \nPress Control-C to terminate node server");
});





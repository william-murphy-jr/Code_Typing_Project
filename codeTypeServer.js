var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var bodyParser = require('body-parser');
// var multer = require('multer');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var handlebars = require('express3-handlebars')
		.create({defaultLayout:'main'});
var body = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')
var fortune = require('./lib/fortune.js');

app.set('port', process.env.PORT || 9000);

app.use(express.static(__dirname + '/public'));

// app.use(function(req, res, next) {
// 	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
// 	next();
// });

// Routes:
app.get('/', function(req, res) {
	res.render('home');
});

// app.get('/about', function(req, res) {
// 	// var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];

// 	res.render('about', { 
// 		fortune: fortune.getFortune(),
// 		pageTestScript: '/qa/tests-about.js' 
// 	});
// });

// app.get('/tours/hood-river', function(req, res){
// 	res.render('tours/hood-river');
// });

// app.get('/tours/oregon-coast', function(req, res){
// 	res.render('tours/oregon-coast');
// });

// app.get('/tours/request-group-rate', function(req, res){
//     res.render('tours/request-group-rate');
// });


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





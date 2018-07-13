var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
const path = require('path');

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist/'));


// For Passport
app.use(session({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//Models
var models = require("./server/models");


//Routes
var authRoute = require('./server/routes/auth.js')(app, passport);
require("./server/controllers/dbcontroller")(app);

//load passport strategies
require('./server/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync({}).then(function () {
	console.log('Database synced');

}).then(function(stuff) {
	models.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
}).catch(function (err) {
	console.log(err, "Database sync failed");
});


app.get('/', function (req, res) {
	res.send('Welcome to Passport with Sequelize');
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});

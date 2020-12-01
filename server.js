//Définition des modules
const express = require("express"); 
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
var cors = require ('cors');
var app = express();
var flash = require('express-flash');
var session = require('express-session');

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
const port = process.env.PORT || 5000;
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(session({ 
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}))

var Users = require('./routes/Users')
var Markers = require('./routes/Markers')
var Locations = require('./routes/Locations')

app.use(flash());
app.use('/users', Users)
app.use('/markers', Markers)
app.use('/locations', Locations)
//const employeeRoutes = require('./routes/user.route')// using as middleware



//On définit la route Hello
app.get('/hello',function(req,res){
    res.json("Hello World")
})

//Définition et mise en place du port d'écoute+



module.exports = app;
const express = require('express')
const locations = express.Router()
const Sequelize = require('sequelize')
const cors = require('cors')
//var dbConn  = require('./../config/db.config');
const Location = require('../models/Location');

var url = require('url');
var querystring = require('querystring');

var mysql  = require('mysql');
const User = require('../models/User');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nabeulsmart'
});

dbconn.connect(function(err){
    if(err){
      console.log('Database connection error');
    }else{
      console.log('Database connection successful');
    }
  });


locations.get('/location', function(req, res, next) {
      
    dbconn.query('SELECT * FROM locations ORDER BY id desc',function(err,rows ,fields)     {
  
        if(err) {
            console.log(err);
            req.flash('error', err);
            // render to views/books/index.ejs
            console.log('result failed'+res);  
        } else {
  
            Location.findAll().then(users => {
                //on récupère ici un tableau "users" contenant une liste d'utilisateurs
                console.log(users);
                console.log(users.location);
                res.json(users)
            })
          /* Marker.findOne()
            // render to views/books/index.ejs
            //console.log('result successful'+req.body.rows+ rows); 
            console.log('result successful'+  res.json()); 
            console.log('result successful'+  rows); 
            rows.forEach((fields) => {
                console.log(fields.name);
              });
            console.log('result successful'+ fields[1]); */
        }
    });
  });
  
  module.exports = locations  
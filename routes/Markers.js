const express = require('express')
const markers = express.Router()
const Sequelize = require('sequelize')
const cors = require('cors')
//var dbConn  = require('./../config/db.config');
const Marker = require('../models/Marker');

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
   
  

/*markers.get('/mark',(req,res) => {
    mysqlConnection.query('SELECT * FROM Marker', (err, rows, fields)
      =>{
         if (!err)
         res.send(rows);
         else
         console.log(err);
     });

     
})*/
/* GET message by id. */
/*markers.get('/:id', function (req, res, next) {
    var params = req.params;
    var sql = "SELECT * FROM markers WHERE id = ?"
    dbconn.query(sql, params.id, function (err, message) {
      if (err) {
        console.log('Result' + message);
      }else{
      console.log("Result: " + message);
      res.render('message', {
        title: 'Message',
        message: message[0]
      });
    }})
  });*/

markers.get('/mark', function(req, res, next) {
      
    dbconn.query('SELECT lat FROM markers ORDER BY id desc',function(err,rows ,fields)     {
 
        if(err) {
            console.log(err);
            req.flash('error', err);
            // render to views/books/index.ejs
            console.log('result failed'+res);  
        } else {

            Marker.findAll().then(users => {
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

markers.get('/mark/get',function(req,res,next){
  var context = {};
  dbconn.query('SELECT lat,lng FROM markers ORDER BY id desc', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.stringify(rows);
    res.json( rows);
  });
});




module.exports = markers
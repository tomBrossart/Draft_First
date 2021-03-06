var express = require('express');
var router = express.Router();
var pg = require('pg');

var poolModule = require('../modules/pool.js');
var pool = poolModule;

router.get('/', function(req, res) {
  //console.log('start');
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      //console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //GET tasks from the database
      var queryText = 'SELECT "topic" FROM "random_topic" ORDER BY RANDOM() LIMIT 1';
      db.query(queryText, function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          //console.log('Attempted to query with', queryText);
          //console.log('Error making query');

          res.sendStatus(500);
        } else {
          //console.log(result);
          //name array (arrayOfTasks) and send result to client
          res.send({
            randomIdea: result.rows
          });
        }
      });
    }
  });
}); //end of get router

module.exports = router;

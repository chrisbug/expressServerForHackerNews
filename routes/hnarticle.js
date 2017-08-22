var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://cbuggy:gizmo4942@ds153853.mlab.com:53853/hackernews',[hnArticles]);

router.get('/hnArticles', function(req, res, next){
  db.articles.find(function(err, hnArticles))
});

module.exports = router;

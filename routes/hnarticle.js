var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://cbuggy:gizmo4942@ds153853.mlab.com:53853/hackernews',['hnArticles']);

//Get entire array
router.get('/hnarticles', function(req, res, next){
  db.hnArticles.find(function(err, hnArticles){
    if(err){
      console.log('error in reciving hnArticles');
      res.send(err);
    }else  {
      res.json(hnArticles);
    }
  });
});

//get one object
router.get('/hnarticle/:id', function(req, res, next){
  db.hnArticles.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, hnArticle){
    if(err){
      console.log('error in reciving hnArticles');
      res.send(err);
    }else  {
      res.json(hnArticle);
    }
  });
});

//save article
router.post('/hnarticle/save', function(req, res, next){
  var hnArticle = req.body;
  hnArticle.likes = 0;
  if(!hnArticle.title || !hnArticle.description || !hnArticle.article || !hnArticle.imageLink){
      res.status(400);
      res.json({
        "error":"invalid data"
      });
  } else {
    db.hnArticles.save(hnArticle, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});

//update hnarticles
router.put('/hnarticle/:id', function(req, res, next){
  console.log('starting update');
  var hnArticle = req.body;
  var updObj = {};
  if(hnArticle.title && hnArticle.description && hnArticle.article && hnArticle.imageLink){
    updObj.title = hnArticle.title;
    updObj.description = hnArticle.description;
    updObj.article = hnArticle.article;
    updObj.imageLink = hnArticle.imageLink;
    updObj.likes = hnArticle.likes;
  }
  if(!updObj){
    res.status(400);
    res.json({
      "error":"invalid data"
    });
  } else {
    console.log('pushing the update to db');
    db.hnArticles.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result){
        if(err){
          console.log('error on updating id');
          res.send(err);
        } else {
          res.json(result);
        }
    });
  }
});

  //remove hnarticles
  router.delete('/hnarticle/remove/:id', function(req, res, next){
      db.hnArticles.remove({
        _id: mongojs.ObjectId(req.params.id)
      },'', function(err, result){
        if(err){
          res.send(err);
        } else {
          res.json(result);
        }
    });
  });

module.exports = router;

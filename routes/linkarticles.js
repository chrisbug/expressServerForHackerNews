var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://cbuggy:gizmo4942@ds153853.mlab.com:53853/hackernews',['linkArticles']);

router.get('/linkarticles', function(req, res, next){
  db.linkArticles.find(function(err, linkArticles){
    if(err){
      console.log('error in reciving linkArticles');
      res.send(err);
    }else  {
      res.json(linkArticles);
    }
  });
});

router.get('/linkarticle/:id', function(req, res, next){
  db.linkArticles.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, linkArticles){
    if(err){
      console.log('error in reciving linkArticle');
      res.send(err);
    }else  {
      res.json(linkArticles);
    }
  });
});

//save article
router.post('/linkarticle/save', function(req, res, next){
  console.log('starting to save linka')
  var linkArticle = req.body;
  if(!linkArticle.title || !linkArticle.description || !linkArticle.link){
      res.status(400);
      res.json({
        "error":"invalid data"
      });
  } else {
    console.log('running save for link article')
    db.linkArticles.save(linkArticle, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});

//update linkarticles
router.put('/linkarticle/:id', function(req, res, next){
  var linkArticle = req.body;
  var updObj = {};
  if(linkArticle.isCompleted){
    updObj.isCompleted = linkArticle.isCompleted;
  }
  if(linkArticle.title && linkArticle.description && linkArticle.link){
    updObj.title = linkArticle.title;
    updObj.description = linkArticle.description;
    updObj.link = linkArticle.link;
    updObj.likes = linkArticle.likes;
  }
  if(!updObj){
    res.status(400);
    res.json({
      "error":"invalid data"
    });
  } else {
    db.linkArticles.update({
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

  //remove linkarticles
  router.delete('/linkarticle/remove/:id', function(req, res, next){
      db.linkArticles.remove({
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

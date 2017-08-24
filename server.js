const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const hnArticles = require('./routes/hnarticle');
const linkArticles = require('./routes/linkarticles')
const app = express();

//Body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1', hnArticles);
app.use('/api/v1', linkArticles);

app.listen(3000, function(){
  console.log('server started on port 3000...')
})

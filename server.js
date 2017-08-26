const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const hnArticles = require('./routes/hnarticle');
const linkArticles = require('./routes/linkarticles')
const index = require('./routes/index.js');
const app = express();

//Body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
  res.header({'Content-Type': 'application/json; charset=UTF-8',
                                     'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                                     'Access-Control-Allow-Origin': '*',
                                     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
                  });
  next();
});

app.use('/', index)
app.use('/api/v1', hnArticles);
app.use('/api/v1', linkArticles);

app.listen(3000, function(){
  console.log('server started on port 3000...')
})

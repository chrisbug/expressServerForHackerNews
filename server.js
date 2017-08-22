const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var hnArticles = require('./routes/hnarticle');
const app = express();

//Body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/v1', hnArticles);

app.listen(3000, function(){
  console.log('server started on port 3000...')
})

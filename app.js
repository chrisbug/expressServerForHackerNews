const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const MongoClient = require('mongodb').MongoClient;
const url='mongodb://cbuggy:4942gizmo@ds153853.mlab.com:53853/hackernews';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//Conecting to database
MongoClient.connect(url, (err, database) =>{
  console.log('monogDB connected ....');
  if(err){
    console.log('Failed on connection..')
    throw err;
    db = database;
    Hnarticles = db.collection('hnArticles');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});

app.get('/hnarticles', (req, res) => {
  let articles = [
      {
        title: 'My Awesome Article',
        description: 'This Awesome article is tell you about all the awesome things that are Awesome',
        article:`In The year 1900 the awesome bird did awesome things that were awesome and ye
        I used backtics cause es6 whoop whoop FREEDOM even though its ecma 2017 and soon to be
        2018 like WAAAA :O
        `,
        imageLink: 'http://www.trendbuzzy.com/wp-content/uploads/2017/05/1496272572_hqdefault.jpg',
        likes: 6
      },
      {
        title: 'My Awesome Article 2',
        description: 'This Awesome article is tell you about all the awesome things that are Awesome',
        article:`Did you know that Angular 4 is now just called Angular cause 3 is bad luck in china
        weird right anyway its kinda cool I guess O also old angular is just called angualr.js now
        and 2 is still 2 but really it was just deperacted.
        `,
        imageLink: 'http://www.angularconnect.com/workspace/2015/img/resources/angular.png',
        likes: 5
      }
    ];
  console.log('Sent hnarticles');
  res.json(articles);
});

app.put('/hnarticles/likes', (req, res) => {
    let index = req.body.index;
    let likes = req.body.likes;
    console.log('index ' + index + 'likes ' + likes);
});

app.get('/linkarticles', (req, res) => {
  let articles = [
    {
      title: 'Sample article One',
      description: 'This is just a test article for testing of the test',
      link:`'http://thehackernews.com/2017/08/two-critical-zero-day-flaws-disclosed.html'
      `,
      likes: 6
    },
    {
      title: 'Sample article two',
      description: 'This Awesome article is tell you about all the awesome things that are Awesome',
      article:`Did you know that Angular 4 is now just called Angular cause 3 is bad luck in china
      weird right anyway its kinda cool I guess O also old angular is just called angualr.js now
      and 2 is still 2 but really it was just deperacted.
      `,
      imageLink: 'http://www.angularconnect.com/workspace/2015/img/resources/angular.png',
      likes: 5
    }
  ];
  console.log('Sent hnarticles');
  res.json(articles);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/downloads/pdf.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) =>{
  let name = req.body.name;
  let email = req.body.email;

  console.log(name+ ' has subscribe with ' + email);
});

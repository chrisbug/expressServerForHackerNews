const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/articles', (req, res) => {
  let articles = [
    {
      title: 'artTitle',
      description: 'This is a description',
      article:'This is a article',
      mageLink: 'imageLink',
      likes: 5
    }
  ];
  console.log('Sent articles');
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

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

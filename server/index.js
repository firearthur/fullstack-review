const express = require('express');
let app = express();
const db = require('../database');
const bodyParser = require('body-parser');
const githubAPI = require('../helpers/github');
// UNCOMMENT FOR ANGULARJS
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules/angular'));

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/repos', function (req, res) {
  githubAPI.getReposByUsername(req.body.username, (err, data)=>{
    if(err) {
      res.send(err);
    }
    if(data) {
      res.send(201);
    }
  });
});

app.get('/repos', function (req, res) {
  db.getRepos((err, repos)=>{
    
    res.send(repos);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

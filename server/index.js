var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var github_token = require('./githubToken');
var request = require('request');
var Promise = require('bluebird');
// var db = require('../database/').DB;
var Repos = require('../database/index').Repo;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/repos/import', function (req, res) {
  
  const username = req.body.q;

  const options = {
    url: `https://api.github.com/users/${username}/repos?access_token=${github_token}`,
    method: 'GET',
    headers: { 'User-Agent': 'sirkortes' }
  };

  request( options, function(error, response, body){

      if ( error ){
        console.log('request error:', error);
        throw error;

      } else if ( typeof body === 'string' ) {

        console.log("RECEIVING BODY!",body);

          // body has our github data
          JSON.parse(body).forEach(function(repo){

            var new_repo = {
                              id: repo.id,
                              name: repo.name,
                              description: repo.description,
                              owner: repo.owner.login,
                              owner_url: repo.owner.html_url,
                              private: repo.private,
                              updated_at: repo.updated_at,
                              url: repo.homepage || repo.html_url,
                              stars: repo.stargazers_count,
                              watchers: repo.watchers_count,
                              forks: repo.forks
                            };

            Repos.findOneAndUpdate( new_repo, new_repo, { upsert: true }, 
              function(err, doc){
                console.log( "Saved repo:", new_repo.name);
                if (err) return res.send(500,{ updateerror: err });
            });

          });
      } else {

        console.log("BODY MESSAGE",body.message);

      }

    res.end();

  });// close request

});// close app.post


  // send back to client
app.get('/repos', function (req, res) {
  

  Repos.find()
       // .sort({ updated_at: -1 })
       .then(function(repos){
          res.send(repos);
        });

});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


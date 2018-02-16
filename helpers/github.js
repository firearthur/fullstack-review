const request = require('request');
const config = require('../config.js');
const db = require('../database');

let getReposByUsername = (username, callback) => {
  let options = {
    method: "GET",
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    }
  };
  request(options, function(err, res){
    if(err) console.log('error ', err);
    console.log('I just got the repos back from Github API');
    let data = JSON.parse(res.body)
    db.save(data, callback);
    // console.log('ARE WE DOING ANYTHING!?', data);
  })
}

module.exports.getReposByUsername = getReposByUsername;
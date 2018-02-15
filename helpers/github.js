const request = require('request');
const config = require('../config.js');
const db = require('../database');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    method: "GET",
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    }
  };
  request(options, function(err, res){
    console.log('err', err);
    // console.log('res', res);
    let data = JSON.parse(res.body)
    db.save(data);
    // console.log('ARE WE DOING ANYTHING!?', data);
  })
}

module.exports.getReposByUsername = getReposByUsername;
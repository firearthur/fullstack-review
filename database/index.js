const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!

});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true, dropDups: true },
  name: String,
  starsCount: Number,
  owner: String,
  ownersGithubId: Number,
  ownersUrl: String
});

let Repo = mongoose.model('Repo', repoSchema);

// Repo.remove({}, (err, success)=> { //dropping the database
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Repos dropped');
//   }
// })


let save = (repos, callback) => {
  // console.log('repos from database index.js', repos);
  console.log('im about to save the repos that i got from git hub api');
  if (repos){
    let mappedRepos = repos.map((repo) => {
     return {
        id: repo.id,
        name: repo.name,
        starsCount: repo.stargazers_count,
        owner: repo.owner.login,
        ownersGithubId: repo.owner.id,
        ownersUrl: repo.owner.url,
      };
    });
    
    Repo.insertMany(mappedRepos,(err, data)=>{
      if(err) {
        callback(err, null);
      }
      callback(null, data); 
    }); 
  } else {
    console.log('I got empty repos at index js in database');
  }


}



let getRepos = (callback) => {

  Repo.
    find().
    limit(25).
    sort('-starsCount').
    select('').
    exec(callback);

  // Repo.find(function (err, repos) {
  //   if (err) return console.log(err);
  //   callback(repos);
  // })
};

module.exports.getRepos = getRepos;
module.exports.save = save;



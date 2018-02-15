const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id:{ type : Number , unique : true, dropDups: true },
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


let save = (repos) => {
  // console.log('repos from database index.js', repos);
  repos.forEach((repo) => {

    Repo({
      id: repo.id,
      name: repo.name,
      starsCount: repo.stargazers_count,
      owner: repo.owner.login,
      ownersGithubId: repo.owner.id,
      ownersUrl: repo.owner.url,
    }).save();
  });


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



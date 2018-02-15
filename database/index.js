const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log(`we're connected!`);
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
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
  console.log('repos from database index.js', repos);
  repos.forEach((repo) => {

    Repo({
      name: repo.name,
      starsCount: repo.stargazers_count,
      owner: repo.owner.login,
      ownersGithubId: repo.owner.id,
      ownersUrl: repo.owner.url,
    }).save();
  });
  // repos.forEach((repo)=>{
  //   repo.save((err)=>{console.log('error from save repos. Error:', err)});
  // });

}



let getRepos = (callback) => {
  Repo.find(function (err, repos) {
    if (err) return console.log(err);
    callback(repos);
  })
};

module.exports.getRepos = getRepos;
module.exports.save = save;



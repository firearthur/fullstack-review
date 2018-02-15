// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
// const seedData = require('./data.json');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log(`we're connected!`);
// });

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
//   name : String,
//   starsCount: Number,
//   owner: String,
//   ownersGithubId: Number,
//   ownersUrl: String
// });

// let Repo = mongoose.model('Repo', repoSchema);
// Repo.remove({}, (err, success)=> {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('Repos dropped');
//   }
// })


// let save = (repos) => {
//   repos.forEach((repo)=>{
    
//     Repo({
//         name: repo.name,
//         starsCount: repo.stargazers_count,
//         owner: repo.owner.login,
//         ownersGithubId: repo.owner.id,
//         ownersUrl: repo.owner.url,
//     }).save();
//   });
// }

// save(seedData);
// process.exit();
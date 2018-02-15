const $ = require('jquery');
const server = 'http://localhost:1128'
exports.aj = {
    get: (path, callback)=>{
      $.get(`${server}${path}`)
        .done((repos)=>{
          if(repos){
            callback(repos);
          }
        })
        .fail((error)=>{
          console.log('got an error while fetching the repos', error);
        });
    },
    post: (path, username)=>{
      $.post(`${server}${path}`, {username: username})
        .done(()=>{
          console.log('posted successfully');
        })
        .fail((err)=>{
          console.log('Error while trying to post to the server', err);
        });
    }
};
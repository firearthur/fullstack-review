const $ = require('jquery');
const server = 'http://localhost:1128'
exports.aj = {
    get: (path, callback)=>{
      $.get(`${server}${path}`)
        .done((repos)=>{
          console.log('in the get and just got you repos')
          if(repos){
            callback(repos);
          }
        })
        .fail((error)=>{
          console.log('got an error while fetching the repos', error);
        });
    },
    post: (path, username, callback)=>{
      $.post(`${server}${path}`, {username: username})
        .done(()=>{
          // console.log('posted successfully');
          console.log('posted request to your server and about to call big search as callback');
          callback(); //initiating a get request line 22 on search.jsx
        })
        .fail((err)=>{
          console.log('Error while trying to post to the server', err);
        });
    }
};
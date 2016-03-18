var apiKey = require('./../.env').apiKey;

exports.getRepos = function(search){
  $.get('https://api.github.com/users/' + search + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

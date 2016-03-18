var apiKey = require('./../.env').apiKey;

exports.getRepos = function(search){

  $.get('https://api.github.com/users/' + search + '?access_token=' + apiKey).then(function(response){
    if(response.name === null){
      $(".showUserInfo").text("Sorry, we couldn't find anyone with that username.")
    }
    else{
    $(".showUserInfo").text(response.name);
    $(".showUserInfo").text(response.name);
    $(".showUserInfo").text(response.name);
    $(".showUserInfo").text(response.name);
    console.log(response.name);
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};

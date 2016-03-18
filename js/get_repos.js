var apiKey = require('./../.env').apiKey;

exports.getRepos = function(search){

  $.get('https://api.github.com/users/' + search + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#showUserUsername").text(response.login);
    $("#showUserName").text(response.name);
    $("#showUserGithubEmail").html("<a href='" + response.html_url + "'>" + response.html_url + "</a>");
    $("#showUserEmail").text(response.email);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $(".showUserUsername").text("Sorry, we couldn't find anyone with that username.");
  });

};

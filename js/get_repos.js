var apiKey = require('./../.env').apiKey;
exports.getRepos = function(search){
  $.get('https://api.github.com/users/' + search + '?access_token=' + apiKey + '&per_page=1000').then(function(response){
    $("#showUserUsername").text(response.login);
    $("#showUserName").text(response.name);
    $("#showUserGithubEmail").html("<a href='" + response.html_url + "'>" + response.html_url + "</a>");
    $("#showUserEmail").text(response.email);
    $.get('https://api.github.com/users/' + response.login + '/repos' + '?access_token=' + apiKey + '&per_page=1000').then(function(repoResponse){
      console.log(repoResponse);
      var repoResponseName = [];
      var repoResponseDescription = [];
      for (var i = 0; i < repoResponse.length; i++) {
        repoResponseName[i] = repoResponse[i].name;
        repoResponseDescription[i] = repoResponse[i].description;
        $("#showAllUserRepos").append("<li> Name: " + repoResponseName[i] + " - Description: " + repoResponseDescription[i] + "</li>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

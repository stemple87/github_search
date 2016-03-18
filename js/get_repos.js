var apiKey = require('./../.env').apiKey;

exports.getRepos = function(search){
  //get user rinfo
  $.get('https://api.github.com/users/' + search + '?access_token=' + apiKey + '&per_page=1000').then(function(response){
    $("#showUserUsername").text(response.login);
    $("#showUserName").text(response.name);
    $("#showUserGithubEmail").html("<a href='" + response.html_url + "'>" + response.html_url + "</a>");
    $("#showUserEmail").text(response.email);
    //repo info
    $.get('https://api.github.com/users/' + response.login + '/repos' + '?access_token=' + apiKey + '&per_page=1000').then(function(repoResponse){
      var repoResponseInfo = [];
      for (var i = 0; i < repoResponse.length; i++) {
        repoResponseInfo[i] = repoResponse[i].html_url;
        $("#showAllUserRepos").append("<li>" + repoResponseInfo[i] + "</li>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

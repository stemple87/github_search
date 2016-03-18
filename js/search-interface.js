var getRepos = require('./../js/get_repos.js').getRepos;

$(document).ready(function(){
  $("#button").click(function(event){
    event.preventDefault();

    var searchedName = $("#userName").val();
    getRepos(searchedName);
    $(".showUserInfo").show();

  });
});

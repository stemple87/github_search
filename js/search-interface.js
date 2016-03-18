var getRepos = require('./../js/get_repos.js').getRepos;

$(document).ready(function(){
  $("#button").click(function(event){

    var searchedName = $("#userName").val();

    getRepos(searchedName);


  });
});

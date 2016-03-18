var getRepos = require('./../js/get_repos.js').getRepos;

$(document).ready(function(){
  $("#button").click(function(event){
    var searchedName = $("#userName").val();
    var resultsObject = getRepos(searchedName);
    console.log("returned from function: " + resultsObject);
  });
});

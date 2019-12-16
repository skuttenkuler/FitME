$(document).ready(function(){
    var queryURL ="https://wger.de/api/v2/";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
})
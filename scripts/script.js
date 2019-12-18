$(document).ready(function(){
// avoid cross origin errors
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });
//// ^for APIS

  const modal = $('#signin-modal');
  const modalBtn = $('#login-btn');
  
  
  // Events
  modalBtn.on('click', function(){
    modal.attr('style','display: block')
    console.log("clicked")
  });
  

  $(".accountbutton").on("click", function(){
      $("#signin-modal").attr('style', 'display:hidden')
      $("#signup-modal").attr('style', 'display:block')
  });
  $(".accountbutton2").on("click", function(){
    $("#signup-modal").attr('style', 'display:hidden')
    $("#signin-modal").attr('style', 'display:block')
})





//////////////////API ////////////////////////////// 
 //////macro calculator/////////
var storage=window.localStorage;
//intiializing global variable
var height;
var weight;
var age;
var gender;
var activityLevel;
var currentDietPlan;
var calorieRecommendation;


// putting this infor in to test the formulas during the time tha the actual local storage initializations are missing
storage.setItem("height","67");
storage.setItem("weight","160");
storage.setItem("age","23");
storage.setItem("gender","M");
storage.setItem("activityLevel", "1");
storage.setItem("currentDietPlan", "standard");
//^remove once testing is over
////

//REPLACE THESE WITH FIREBASE CALLS///
// retrieve items from local storage

height= storage.getItem("height");
weight= storage.getItem("weight");
age =storage.getItem("age");
gender =storage.getItem("gender");
activityLevel=storage.getItem("activityLevel");
currentDietPlan= storage.getItem("currentDietPlan");

//////FOR USE IN CALORIE EQUATION///////
H= parseInt(height);
W= parseInt(weight);
A= parseInt(age);
ALevel= parseInt(activityLevel);

//calorie formula
function calculateCalories(){
    if (gender === "M"){
        //Adult male: 66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) = BMR
        //formula from http://www.checkyourhealth.org/eat-healthy/cal_calculator.php
        calorieRecommendation= (66 + (6.3 * W) +(12.9 *H) - (6.8*A))* ALevel;
    }
    else if(gender === "F"){
        //Adult female: 655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years) = BMR

        calorieRecommendation= (655 + (4.3 * W) +(4.7 *H) - (4.7*A))* ALevel;
    }
}
////// STANDARD NUMVER FOR MACRO CALCULATION
var carbs_per_gram = 4;
var protein_per_gram =4;
var fat_per_gram= 9;
////// only NECESSARY if using different DIET PLANS
var carbPercent;
var proteinPercent;
var fatPercent;

 ///// used to display to the html       
var carbMacro;
var proteinMacro;
var fatMacro;
function calculateMacros(){
    if(currentDietPlan=== "standard"){
        carbPercent = .5;
        proteinPercent=.2;
        fatPercent=.3;
        
         carbMacro = (calorieRecommendation * carbPercent)/ carbs_per_gram;
         proteinMacro = (calorieRecommendation* proteinPercent) / protein_per_gram;
         fatMacro = (calorieRecommendation * fatPercent) / fat_per_gram;


        $("#carbGrams").text(carbMacro.toFixed());
        $("#proteinGrams").text(proteinMacro.toFixed());
        $("#fatGrams").text(fatMacro.toFixed());

        //https://www.health.harvard.edu/staying-healthy/dietary-guidelines-and-caloric-percentages
    }
    // else if(currentDietPlan === "ketogenic"){
    //     carbPercent = .35;
    //     proteingPercent=.5;
    //     fatPercent=.6;

    //     carbMacro = (calorieRecommendation * carbPercent)/ carbs_per_gram;
    //     proteinMacro = (calorieRecommendation* proteinPercent) / protein_per_gram;
    //     fatMacro = (calorieRecommendation * fatPercent) / fat_per_gram;
   
   
    //        $("#carbGrams").text(carbMacro);
    //        $("proteinGrams").text(proteinMacro);
    //        $("fatGrams").text(fatMacro);
    //     //https://www.healthline.com/nutrition/ketogenic-diet-101#types
    // }
    // else if(currentDietPlan === "heartHealthy"){
    //     carbPercent = .2;
    //     proteingPercent=.45;
    //     fatPercent=.35;

    //     carbMacro = (calorieRecommendation * carbPercent)/ carbs_per_gram;
    //     proteinMacro = (calorieRecommendation* proteinPercent) / protein_per_gram;
    //     fatMacro = (calorieRecommendation * fatPercent) / fat_per_gram;
   
   
    //        $("#carbGrams").text(carbMacro);
    //        $("proteinGrams").text(proteinMacro);
    //        $("fatGrams").text(fatMacro);
    //     //https://www.webmd.com/cholesterol-management/tlc-diet#2

    // }
}
//actually calculates calories
calculateCalories();
//displaying function
 function displayCurrentMacros(){
     $("#recCal").text(calorieRecommendation);
      calculateMacros();
     }
///calling to display
displayCurrentMacros();
    
    //create button to enter new preferences into local storage 
    //^^should this be on account page

    // calculations for each type of diet

    // hover over info for different items

    // mayybe recipe api, sprinkle
  ////// THIS IS A SPRINKLE
// $("#dietType").on("click", setDietPlan);
// function setDietPlan(){
//     console.log(this);
//     event.preventDefault();
//     console.log(this);

//     // var dietSelection = this.val();
//     // storage.setItem("currentDietPlan", dietSelection);
//     // console.log(storage.getItem("currentDietPlan"));
// }
////end macro calculator//////

//////////// yelp////////////
$(".yelp").on("submit", function () {
  event.preventDefault();
  $(".gym-container").empty();

  var location = $("#location").val();
  
  var queryURL ="https://api.yelp.com/v3/businesses/search?term=gym&location="+ location;
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      authorization: "Bearer b7kV1caMXp8WNjvyHsZeiJkU9qJo3wDv58LppHhJgGk8Un8C3f3Ezoz3y-7jSwklVXIvXeb3Su4fZjKxJE0zZCqp10H5kKDReI1MqlcDUtopgKNuWWoQIr7pIAv0XXYx"
    }
  }).then(function(response){
    
    
  for (var i = 0; i < 4; i++) {
  gymDiv = $("<div>").addClass("gymDiv");
  gymDiv.append('<img class="thumbnail" src="' 
                      + response.businesses[i].image_url + '"/><h2 class="name">' 
                      + response.businesses[i].name + '</h2><p class="phone">'
                      + response.businesses[i].display_phone+'</p><p class="address">' 
                      + response.businesses[i].location.address1 + ', ' 
                      + response.businesses[i].location.city + ' ' 
                      + response.businesses[i].location.zip_code + '</p>');
  $(".gym-container").append(gymDiv);
}

})
})
//////////// end Yelp /////////

})


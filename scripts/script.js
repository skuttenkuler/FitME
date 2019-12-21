$(document).ready(function () {

  // avoid cross origin errors
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });


  //get quote
  $.getJSON('https://api.quotable.io/random', function (data) {
    // console.log(`${data.content} —${data.author}`)
    quoteDiv = $("<h3>").text(data.content);
    authorDiv = $("<h3>").text("-  " + data.author);
    $(".quote").append(quoteDiv, authorDiv);
  })



  const modal = $('#signin-modal');
  const modalBtn = $('#login-btn');
  const closeModal = $(".close");
  closeModal.on("click", function () {
    $("#account-modal").attr('style', 'display: none');
  })

  // Events
  modalBtn.on('click', function () {
    modal.attr('style', 'display: block')
  });


  $(".accountbutton").on("click", function () {
    $("#signin-modal").attr('style', 'display:hidden')
    $("#signup-modal").attr('style', 'display:block')
  });
  $(".accountbutton2").on("click", function () {
    $("#signup-modal").attr('style', 'display:hidden')
    $("#signin-modal").attr('style', 'display:block')
      ;
  })
  $("#account-btn").on("click", function () {
    $("#account-modal").attr('style', 'display: block')
  });

  var height;
  var weight;
  var age;
  var gender;
  var days;
  var activityLevel;


  /////////workouts////////

  var H;
  var W;
  var A;
  var ALevel;

  // retrieve items from Firbase
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection("users").doc(user.uid).get().then(doc => {
        userData = doc.data();
        height = userData.height;
        weight = userData.weight;
        age = userData.age;
        gender = userData.gender;
        days = userData.days;
        activityLevel = userData.activity;
        console.log(gender);
        console.log(age);
        //////FOR USE IN CALORIE EQUATION///////
        H = parseInt(height);

        W = parseInt(weight);
        A = parseInt(age);
        ALevel = parseInt(activityLevel);


        displayWorkout();

        W = parseInt(weight);
        A = parseInt(age);
        ALevel = parseInt(activityLevel);
        console.log(days, "______");
        displayWorkout(days);

        calculateCalories();
        displayGyms();
      });
      //Workout

      function displayWorkout(days) {
        $(".workout-container").empty();
        if (days === "1") {
          w1 = $("<button>").addClass("w1").text(" Intense cardio and lift weights")
          $(".workout-container").append(w1);
        }
        else if (days === "2") {
          w1 = $("<button>").addClass("w1").text(" Intense cardio and upper body")
          w2 = $("<button>").addClass("w1").text(" Intense cardio and lower body")
          $(".workout-container").append(w1, w2);
        }
        else if (days === "3") {
          w1 = $("<button>").addClass("w1").text(" Lift Wieghts: Upperbody")
          w2 = $("<button>").addClass("w1").text(" Lift Wieghts: Lowerbody")
          w3 = $("<button>").addClass("w1").text(" Cardio: Intense")
          $(".workout-container").append(w1, w2, w3);
        }
        else if (days === "4") {
          w1 = $("<button>").addClass("w1").text(" Lift Wieghts: Back/Bi's")
          w2 = $("<button>").addClass("w1").text(" Lift Wieghts: Chest/Tri's")
          w3 = $("<button>").addClass("w1").text(" Lift Wieghts: Back/Shoulders ")
          w4 = $("<button>").addClass("w1").text(" Lift Wieghts: Legs")
          $(".workout-container").append(w1, w2, w3, w4);
        }
        else if (days === "5") {
          w1 = $("<button>").addClass("w1").text(" Lift Wieghts: Arms")
          w2 = $("<button>").addClass("w1").text(" Lift Wieghts: Chest")
          w3 = $("<button>").addClass("w1").text(" Lift Wieghts: Back ")
          w4 = $("<button>").addClass("w1").text(" Lift Wieghts: Legs/Shoulders")
          w5 = $("<button>").addClass("w1").text(" Cardio: Intense")
          $(".workout-container").append(w1, w2, w3, w4, w5);
        }
        else if (days === "6") {
          w1 = $("<button>").addClass("w1").text(" Lift Wieghts: Arms")
          w2 = $("<button>").addClass("w1").text(" Lift Wieghts: Chest")
          w3 = $("<button>").addClass("w1").text(" Lift Wieghts: Back ")
          w4 = $("<button>").addClass("w1").text(" Lift Wieghts: Legs")
          w5 = $("<button>").addClass("w1").text(" Lift Wieghts: Shoulders")
          w6 = $("<button>").addClass("w1").text(" Cardio: Intense")
          $(".workout-container").append(w1, w2, w3, w4, w5, w6);
        }
      }

      //calorie formula
      function calculateCalories() {
        ////// STANDARD NUMVER FOR MACRO CALCULATION
        var carbs_per_gram = 4;
        var protein_per_gram = 4;
        var fat_per_gram = 9;
        if (gender === "M") {
          //console.log("chick")
          //Adult male: 66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) = BMR
          //formula from http://www.checkyourhealth.org/eat-healthy/cal_calculator.php
          var calorieRecommendation = Math.floor(66 + (6.3 * W) + (12.9 * H) - (6.8 * A)) * ALevel;


          carbMacro = (calorieRecommendation) / carbs_per_gram;
          proteinMacro = (calorieRecommendation) / protein_per_gram;
          fatMacro = (calorieRecommendation) / fat_per_gram;

          $("#recCal").text(calorieRecommendation);
          $("#carbGrams").text(carbMacro.toFixed());
          $("#proteinGrams").text(proteinMacro.toFixed());
          $("#fatGrams").text(fatMacro.toFixed());

        }
        else if (gender === "F") {

          //Adult female: 655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years) = BMR

          let calorieRecommendation = Math.floor(655 + (4.3 * W) + (4.7 * H) - (4.7 * A)) * ALevel;

          carbMacro = (calorieRecommendation) / carbs_per_gram;
          proteinMacro = (calorieRecommendation) / protein_per_gram;
          fatMacro = (calorieRecommendation) / fat_per_gram;


          $("#recCal").text(calorieRecommendation);
          $("#carbGrams").text(carbMacro.toFixed());
          $("#proteinGrams").text(proteinMacro.toFixed());
          $("#fatGrams").text(fatMacro.toFixed());
        }
      }
displayGyms();
calculateCalories();

    }


  })




    /////////// GYMS ///////////////

    function displayGyms() {
      $(".gym-container").empty();
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon)


        var queryURL = "https://api.yelp.com/v3/businesses/search?term=gym&latitude=" + lat + "&longitude=" + lon;

        $.ajax({
          url: queryURL,
          method: "GET",
          headers: {
            authorization: "Bearer b7kV1caMXp8WNjvyHsZeiJkU9qJo3wDv58LppHhJgGk8Un8C3f3Ezoz3y-7jSwklVXIvXeb3Su4fZjKxJE0zZCqp10H5kKDReI1MqlcDUtopgKNuWWoQIr7pIAv0XXYx"
          }
        }).then(function (response) {


          for (var i = 0; i < 4; i++) {
            gymDiv = $("<div>").addClass("gymDiv");
            gymDiv.append('<img class="thumbnail" src="'
              + response.businesses[i].image_url + '"/><h2 class="name">'
              + response.businesses[i].name + '</h2><p class="phone">'
              + response.businesses[i].display_phone + '</p><p class="address">'
              + response.businesses[i].location.address1 + ', '
              + response.businesses[i].location.city + ' '
              + response.businesses[i].location.zip_code + '</p>');
            $(".gym-container").append(gymDiv);
          }

        })
      })
    }





    //////////// end Yelp /////////




    //////////// yelp////////////
    $(".yelp").on("submit", function () {
      event.preventDefault();
      $(".gym-container").empty();

      var location = $("#location").val();

      var queryURL = "https://api.yelp.com/v3/businesses/search?term=gym&location=" + location;
      $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
          authorization: "Bearer b7kV1caMXp8WNjvyHsZeiJkU9qJo3wDv58LppHhJgGk8Un8C3f3Ezoz3y-7jSwklVXIvXeb3Su4fZjKxJE0zZCqp10H5kKDReI1MqlcDUtopgKNuWWoQIr7pIAv0XXYx"
        }
      }).then(function (response) {


        for (var i = 0; i < 4; i++) {
          gymDiv = $("<div>").addClass("gymDiv");
          gymDiv.append('<img class="thumbnail" src="'
            + response.businesses[i].image_url + '"/><h2 class="name">'
            + response.businesses[i].name + '</h2><p class="phone">'
            + response.businesses[i].display_phone + '</p><p class="address">'
            + response.businesses[i].location.address1 + ', '
            + response.businesses[i].location.city + ' '
            + response.businesses[i].location.zip_code + '</p>');
          $(".gym-container").append(gymDiv);
        }

      })
    })

  })






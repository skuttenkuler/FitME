

/////////////////////////// Sign Up ///////////////////////////
const signupForm = $('#signup');
  signupForm.on('submit', (event) => {
    event.preventDefault();
    
    // get user info
    const email = $('#signupEmail').val();
    const password = $('#signupPassword').val();
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user.uid);
        var userID = cred.user.uid;
        console.log(userID)
      return db.collection("users").doc(userID).set({
            name:$("#name").val(),
            height: $("#height").val(),
            weight:$("#weight").val(),
            age:$("#age").val(),
            days:$("#days").val(),
            gender:$("#gender").val(),
            activity:$("#activity").val(),
      });
    }).then(() => {
      signupForm.empty();
    });
  });
/////////////////////////// Login User ///////////////////////////
const loginForm = $("#login");
  loginForm.on('submit', (event) => {
    event.preventDefault();
    
    // get user info
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
        $('#signin-modal').attr('style', 'display: none');
        $('#logout-btn').attr('style', 'display:block');
        console.log(cred);
      loginForm.empty();
    });
  
  });
   
//log user out
const logout = $("#logout-btn");
logout.on("click", function(event){
    event.preventDefault();
    auth.signOut().then(() => {
        console.log("signed out")
    });
});

// listen for state of auth status change

auth.onAuthStateChanged(user => {
    if (user) {
      //console.log("signed in");
      db.collection("users").doc(user.uid).get().then(doc => {
          userData = doc.data();
          // console.log(userData.name)
          //welcome banner to dashboard
          username = userData.name;
          welcome = $("<h1>").text("Welcome " + username + "!");
          accountDetails = $("<div>").addClass("accDetails");
          stats = $("<h2>").text("Your personal stats : ");
          age = $("<p>").text("You are " + userData.age + " years old.");
          height = $("<p>").text("Your are " + userData.height + " inches tall.");
          weight = $("<p>").text("You weigh " + userData.weight + " lbs.");
          
          accountDetails.append(stats, age, height, weight);
          $(".welcome-banner").append(welcome);
          $("#account-details").append(accountDetails);
      });
      $('#signin-modal').attr('style', 'display: none');
      $('#logout-btn').attr('style', 'display:block');
      $('#login-btn').attr('style', 'display:none');
      }   
        else {
          console.log('user logged out');
          $("#account-details").empty()
          $('#signin-modal').attr('style', 'display: block');
      
          }
        
      });


  
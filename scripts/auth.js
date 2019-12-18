

/////////////////////////// Sign Up ///////////////////////////
const signupForm = $('#signup');
  signupForm.on('submit', (event) => {
    event.preventDefault();
    
    // get user info
    const email = $('#signupEmail').val();
    const password = $('#signupPassword').val();
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      // close the signup modal & reset form
      
      signupForm.reset();
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
      loginForm.reset();
    });
  
  });
   
//log user out
const logout = $("#logout-btn");
logout.on("click", function(event){
    event.preventDefault();
    auth.signOut().then(() => {
        console.log("signed out")
    })
})

// listen for state of auth status change

auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
    } else {
      console.log('user logged out');
    }
  })

  
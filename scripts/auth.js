

/////////////////////////// Sign Up ///////////////////////////
const signUpForm = $(".signup");
signUpForm.on("submit", function(event){
    event.preventDefault();
    const user = $("#username").val();
    //push info to database collection
    db.collection(user).add({
        name: signUpForm.username.value,
        height:signUpForm.height.value,
        weight:signUpForm.weight.value,
        gender:signUpForm.gender.option.value,
        goal:signUpForm.gainlose.option.value,
    })
    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    auth.createUserWithEmailAndPassword(email,password,username).then(cred => {
        //console.log(cred);
        const modal = $("#signup-modal");
        //after sign in close modal
        modal.close();
        //for future reset the form
        signUpForm.reset();
    });
});

/////////////////////////// Login User ///////////////////////////
const loginForm = $(".login");
loginForm.on("submit", function(event){
    event.preventDefault();

    // assign user info
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user)
        const modal = $("#signin-modal");
        //after login close and reset Modal
        modal.close();
        loginForm.reset();
    });
});
//log user out
const logout = $(".signout");
logout.on("click", function(event){
    event.preventDefault();
    auth.signOut().then(() => {
        console.log("signed out")
    })
})

// listen for state of auth status change
auth.onAuthStateChanged(user => {
    //console.log(user)
    if(user){
        console.log("user logged in:", user)
    } else {
        console.log("user logged out")
    }
})





//switch between sign in and sign up
$(".accountbutton").on("click", function(){
    //console.log("clicked");
    $("#signup-modal").attr("style", "display:visible")
    $("#signin-modal").attr("style", "display:none")
})
$(".accountbutton2").on("click", function(){
    //console.log("clicked");
    $("#signup-modal").attr("style", "display:none")
    $("#signin-modal").attr("style", "display:visible")
})


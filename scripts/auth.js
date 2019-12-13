const signUpForm = $(".signup");
signUpForm.on("submit", function(event){
    event.preventDefault();

    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    auth.createUserWithEmailAndPassword(email,password,username).then(cred => {
        console.log(cred);
   
    });
});

//login User//
const loginForm = $(".login");
loginForm.on("submit", function(event){
    event.preventDefault();

    // user info
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
    })
})

$(".accountbutton").on("click", function(){
    console.log("clicked");
    $("#signup-modal").attr("style", "display:visible")
    $("#signin-modal").attr("style", "display:none")
})
$(".accountbutton2").on("click", function(){
    console.log("clicked");
    $("#signup-modal").attr("style", "display:none")
    $("#signin-modal").attr("style", "display:visible")
})
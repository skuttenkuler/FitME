const signUpForm = $(".signup");
signUpForm.on("submit", function(event){
    event.preventDefault();

    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred);
   
    });
});
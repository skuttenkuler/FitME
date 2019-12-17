

/////////////////////////// Sign Up ///////////////////////////
const signUpForm = $("#signup");
signUpForm.on("submit", function(event){
    event.preventDefault();
    const user = $("#username").val();
    //push info to database collection
    // db.collection(user).add({
    //     name: signUpForm.username.value,
    //     height:signUpForm.height.value,
    //     weight:signUpForm.weight.value,
    //     gender:signUpForm.gender.option.value,
    //     goal:signUpForm.gainlose.option.value,
    // })
    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    auth.createUserWithEmailAndPassword(email,password,username).then(cred => {
        return db.collection('users').doc(cred.user.id).set({
            // set all the info and value
            username: signUpForm.username.value,
            height:signUpForm.height.value,
            weight:signUpForm.weight.value,
            age:signUpForm.age.value,
            activity:signUpForm.activity.value,
            gender:signUpForm.gender.value,
            goal:signUpForm.goal.value,

        });
        
    }).then(() => {
         //console.log(cred);
         
         //after sign in close modal
         //M.Modal.getInstance(modal).close();
         //for future reset the form
        signUpForm.reset();
    });
});

/////////////////////////// Login User ///////////////////////////
const loginForm = $("#login");
loginForm.on("submit", function(event){
    event.preventDefault();

    // assign user info
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user)
        //after login close and reset Modal
        $(".modal").attr('style', 'display: none')
        loginForm.reset();
    });
});
//log user out
const logout = $(".signout");
logout.on("click", function(event){
    event.preventDefault();
    auth.signOut().then(() => {
        console.log("signed out")
        login = $(".")
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





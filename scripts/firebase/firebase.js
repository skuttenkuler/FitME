function(){

    var firebaseConfig = {
        apiKey: "AIzaSyABK3XC0Jn05qK6zfzjxSZ7D6t1G5ai_eI",
        authDomain: "fitme-bb632.firebaseapp.com",
        databaseURL: "https://fitme-bb632.firebaseio.com",
        projectId: "fitme-bb632",
        storageBucket: "fitme-bb632.appspot.com",
        messagingSenderId: "929194468341",
        appId: "1:929194468341:web:4d5bcb45f007743728b6bc",
        measurementId: "G-C0FCH0S429"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    
    // Register a new user
    //call firbase, auth function, create with parameters
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (err) {
        // Handle errors
    });
    
    // Sign in existing user
    //call firebase, auth function, sing in with parameters
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(err) {
        // Handle errors
    });
    
    // Sign out user
    //call sign out function once click sign out
    firebase.auth().signOut()
    .catch(function (err) {
        // Handle errors
    });
    
    ///// SIGN IN UP////////
    $("#signin-button").on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        var username =  document.querySelector('#username').value;
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        var auth = firebase.auth();
        var currentUser = auth.currentUser;
        
        // Step 2
        //  Get a credential with firebase.auth.emailAuthProvider.credential(emailInput.value, passwordInput.value)
        //  If there is no current user, log in with auth.signInWithCredential(credential)
        //  If there is a current user an it's anonymous, atttempt to link the new user with firebase.auth().currentUser.link(credential) 
        //  The user link will fail if the user has already been created, so catch the error and sign in.
    });
}
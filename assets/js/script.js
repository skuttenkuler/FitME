


//////////    FIREBASE     //////////    
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
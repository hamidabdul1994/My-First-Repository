//require('firebase');

var config = {
    apiKey: "AIzaSyAGHEgm48s7_QkBwLw0UX-yCBLQg06zvdA",
    authDomain: "fir-bef76.firebaseapp.com",
    databaseURL: "https://fir-bef76.firebaseio.com",
    storageBucket: "fir-bef76.appspot.com",
};


angular.module("myApp", ["firebase"])
    .controller('loginCtrl', function($scope, $firebase, $location) {
        firebase.initializeApp(config);


        // var auth = firebase.auth();
        // firebase.$onAuth(function(authData) {
        //   $scope.authData = authData;
        // });
        $scope.submit = function() {
            $scope.errorCode = null;

            // console.log("submit call");
            // console.log($scope.email);
            // console.log($scope.password); //createUserWithEmailAndPassword
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
                // Handle Errors here.
                $scope.errorCode = error.code;
                var errorMessage = error.message;
                console.log(error.code);
                console.log(error.message);
                // ...
            }).then(function() {
                if (!$scope.errorCode) {
                    console.log("success");
		$location.path("/none");
                }
            }); // var auth = firebase.auth;
            //  auth.$onAuth(function(authData){
            //      console.log(authData);
            //      $scope.userStatus = authData.password.email;
            //  }); // Check user status


            // firebase.$authWithPassword({
            //   email: $scope.email,
            //   password: $scope.password
            // })
            // .then(function(authData) {
            //   console.log('Logged in as:', authData.uid);
            //   //$state.go('profile.html');
            // })
            // .catch(function(err) {
            //   console.log('error:',err);
            // //  $state.go('login.html');
            // });
        };
    });

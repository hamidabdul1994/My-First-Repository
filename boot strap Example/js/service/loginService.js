angular.module('myApp')
    .factory("MyLoginService", function($cookies, $rootScope, $scope ,$firebase) {
        var service = {};

        // service.Login = function(username, password, callback) {
        //
        //     /* Dummy authentication for testing, uses $timeout to simulate api call
        //      ----------------------------------------------*/
        //     $scope.errorCode = null;
        //     var response = {};
        //     firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
        //         // Handle Errors here.
        //         $scope.errorCode = error.message;
        //         console.log(error.code);
        //         console.log(error.message);
        //         // ...
        //     }).then(function() {
        //             if (!$scope.errorCode) {
        //                 response.success = true;
        //                 console.log("success");
        //             } else {
        //                 response.success = false;
        //             }
        //
        //             if (!response.success) {
        //                 response.message = $scope.errorCode; //'Username or password is incorrect';
        //             }
        //             callback(response);
        //
        //         });
        //     }
        //
        // service.SetCredentials = function(username, password) {
        //
        //     $rootScope.userGlobals = {
        //         currentUser: {
        //             username: username,
        //             //authdata: authdata
        //         }
        //     };
        //
        //     //  $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        //     $cookies.put('userGlobals', $rootScope.userGlobals);
        // };
        //
        // service.ClearCredentials = function() {
        //     $rootScope.userGlobals = {};
        //     $cookies.remove('userGlobals');
        //     //$http.defaults.headers.common.Authorization = 'Basic ';
        // };

        return service;
    });

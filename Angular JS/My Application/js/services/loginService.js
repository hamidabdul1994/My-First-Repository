angular.module('myApp')
.factory('MyLoginService',function ( $http, $cookies, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
          //  $timeout(function(){
                var response = { success: username === 'test' && password === 'test' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
          //  }, 1000);        //Logged in till 10 seconds only


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });

        };

        service.SetCredentials = function (username, password) {

            $rootScope.userGlobals = {
                currentUser: {
                    username: username,
                    //authdata: authdata
                }
            };

          //  $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookies.put('userGlobals', $rootScope.userGlobals);
        };

        service.ClearCredentials = function () {
            $rootScope.userGlobals = {};
            $cookies.remove('userGlobals');
            //$http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    });

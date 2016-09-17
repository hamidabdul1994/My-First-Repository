angular.module("myApp")
    .controller("loginController", function($scope,$rootScope,$cookies, $location,$firebase,$timeout) {
        // reset login status
      // MyLoginService.ClearCredentials();
      //console.log(MyLoginService);
        console.log("login controller");

        //here my login function
        $scope.login = function(){
          myPromise(function(data)
        {
            if(data.success)
            {
              $rootScope.userGlobals = {
                     currentUser: {
                         username: $scope.email
                         //authdata: authdata
                     }
                 };

                 //  $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                 $cookies.put('userGlobals', $rootScope.userGlobals);
              //Timeout service is to make sure that our output will in 1 milisecond delay
              $timeout(function()
              {
              $location.path('/main');
              },1);

              // console.log($location.path());
              // console.log("success promisses");
            }else {

              //Timeout service is to make sure that our output will in 1 milisecond delay
              $timeout(function()
              {
                $scope.error = $scope.error;
              },1);
              console.log("failed");
            }
        });

        }

        // myPromise function is callback based function ,it just executes the business day and getback some output
        var myPromise = function(callback) {
            $scope.dataLoading = true;

            var response = {};
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
                // Handle Errors here.
                $scope.error = error.message;
                console.log(error.code);
                console.log(error.message);
                // ...
            }).then(function() {

              //if statment is make sure that our code is havinf error or not i.e user name password wrong.
                    if (!$scope.error) {

                      //block contain success code
                        response.success = true;
                        $location.path("#/login?success");
                        console.log("success");
                    } else {
                      //block contain authentication failure
                        response.success = false;
                    }
                    callback(response);
                  });

            // MyLoginService.Login($scope.email, $scope.password, function(response) {
            //     if (response.success) {
            //         MyLoginService.SetCredentials($scope.email, $scope.password);
            //         $location.path('/main');
            //     } else {
            //         $scope.error = response.message;
            //         $scope.dataLoading = false;
            //     }
            // });
        };

        //function will reset my login page error data
        $scope.reset = function() {
            $scope.error = "";
        }
    });

angular.module("myApp")
    .controller("loginController", function($scope, $location,$firebase,$timeout) {
        // reset login status
      // MyLoginService.ClearCredentials();
      //console.log(MyLoginService);
        console.log("login controller");

        //here my login function
        $scope.login = function(){
          myPromise(function(data)
        {
          console.log("promisessss::");
            if(data.success)
            {
              $timeout(function()
              {
              $location.path('/main');
            },1);
              console.log($location.path());
              console.log("success promisses");
            }else {
              console.log("failed");
            }
        });

        }

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
                    if (!$scope.error) {
                        response.success = true;
                        $location.path("#/login?success");
                        console.log("success");
                    } else {
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

        //function will reset my login page data
        $scope.reset = function() {
            $scope.error = "";
        }

    });

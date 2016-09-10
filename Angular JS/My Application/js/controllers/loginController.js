/*Here i define my Login page controller */
angular.module("myApp")
    .controller("myLoginController", function($scope, $rootScope, $location, MyLoginService) {
        // reset login status
        MyLoginService.ClearCredentials();
        console.log("login controller");

        //here my login function
        $scope.login = function() {
            $scope.dataLoading = true;
            MyLoginService.Login($scope.username, $scope.password, function(response) {
                if (response.success) {
                    MyLoginService.SetCredentials($scope.username, $scope.password);
                    $location.path('/main');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };

        //function will reset my login page data
        $scope.reset = function() {
            $scope.error = "";
        }

    });

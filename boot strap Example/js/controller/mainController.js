/*here i define my home page controller which will control my home page view or data*/
angular.module("myApp")
    .controller("mainController", function($scope, $cookies, $rootScope) {

        console.log("Main inside controller");

        //to Logout the current user
        $scope.logout = function(){
          //MyLoginService.ClearCredentials();  ,MyLoginService
        }


    });

angular.module("myApp")
.controller("myLogoutCtrl",function($scope,$location,$rootScope) {

        console.log("Logout inside controller");
        $scope.doLogout = function() {
          //$rootScope.isLogin=false;
          console.log(" doLogout call");
        }
    });

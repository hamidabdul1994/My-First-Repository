angular.module("myApp")
.controller("myLogoutCtrl",["$scope","$location" ,"$rootScope",function($scope,$location,$rootScope) {

        console.log("Logout inside controller");
        $scope.doLogout = function() {
          //$rootScope.isLogin=false;
          console.log(" doLogout call");
        }
    }]);

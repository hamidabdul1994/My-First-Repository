angular.module("myApp")
.controller("myCtrl",function($scope,$location,$rootScope) {
        console.log(" Main inside controller")
        $scope.flagValue = false;

        var validUsers = [
                            {username:"test1",password:"123"},
                            {username:"test2",password:"123"},
                            {username:"test3",password:"123"}];

        $scope.doLogin = function() {
            var username = $scope.userBind;
            var password = $scope.passBind;

           for(var p in validUsers)
            {
              if(validUsers[p].username == username && validUsers[p].password === password)
              {
                $scope.flagValue = false;
                $rootScope.isLogin = true;
                $location.path("/main");
                break;
              }
              else {
                $scope.flagValue = true;
                $location.path("/login");

                console.log(username +"  "+password+"  "+$scope.flagValue);
              }
            }
        }
    });

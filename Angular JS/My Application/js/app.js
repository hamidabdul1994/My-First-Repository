
var myApp = angular.module("myApp",["ngRoute"]);
myApp.config(["$routeProvider",function($routeProvider){
      $routeProvider
      .when("/login",{templateUrl:"pages/login.html",controller:'myLoginController'})
      .when("/main",{templateUrl:"pages/home.html",controller:'myMainController'})
        .when("/logout",{templateUrl:"pages/logout.html",controller:'myLogoutController'})
          .otherwise("/",{
            redirectTo:"/login"
          });
    }]);

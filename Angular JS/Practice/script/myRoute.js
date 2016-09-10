//angular.module("myApp",[]);

angular.module("myApp",["ngRoute"])
.config(function($routeProvider){
      $routeProvider
      .when("/login",{templateUrl:"view/login.html",controller:'myCtrl'})
        .when("/main",{templateUrl:"view/home.html",controller:'myLogoutCtrl'})
          .when("/4",{templateUrl:"http://www.w3schools.com/angular/main.htm"})
          .when("/4",{templateUrl:"http://www.w3schools.com/angular/main.htm"})
          .otherwise("/",{
            redirectTo:"/login"
          });
    });

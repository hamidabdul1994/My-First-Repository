/*It is my Application initial phase, my application first runs that java script file */
var myApp = angular.module("myApp", ["ngRoute", "ngCookies","firebase"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "view/login.html",
           controller: "loginController"
        })
        .when("/main", {
            templateUrl: "view/home.html"
           controller: "mainController"
        })
        .when("/register", {
            templateUrl: "view/signup.html"
          //  controller: "registerController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});

// My application will check the path as well as cookies for login purpose only
myApp.run(function($rootScope, $location, $cookies) {
    // keep user logged in after page refresh
    $rootScope.userGlobals = $cookies.get('userGlobals') || {};
    //  if ($rootScope.userGlobals.currentUser) {
    //      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    //  }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        // redirect to login page if not logged in
        console.log("$on running.......");
        if (($location.path() !== '/login' || $location.path() !== '/register' ) && !$rootScope.userGlobals.currentUser) {
            $location.path('/login');
        }
    });
});

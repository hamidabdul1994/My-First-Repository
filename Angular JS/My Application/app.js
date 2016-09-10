/*It is my Application initial phase, my application first runs that java script file */
var myApp = angular.module("myApp", ["ngRoute", "ngCookies"]);
myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "pages/login.html",
            controller: "myLoginController"
        })
        .when("/main", {
            templateUrl: "pages/home.html",
            controller: "myMainController"
        })
        .when("/about", {
            template: "Here i have my About content",
            controller: "myMainController"
        })
        .when("/logout", {
            templateUrl: "pages/logout.html",
            controller: "myLoginController"
        })
        .otherwise({
            redirectTo: "/login"
        });
}]);

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
        if ($location.path() !== '/login' && !$rootScope.userGlobals.currentUser) {
            $location.path('/login');
        }
    });
});

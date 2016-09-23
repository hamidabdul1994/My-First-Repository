angular.module("myApp", ["firebase", "angular-carousel-3d", "ui.router"])
    .controller("myIplctrl", function($scope, $firebase, $timeout, $log) {

        //Controller end
    })
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'view/teamname.html',
           controller: 'teamNameCtrl'
        })

        // PlayerInfo PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('playerinfo', {
            url: '/playerinfo?teamname',
            templateUrl: 'view/teaminfo.html',
            controller: 'teamInfoCtrl'
        });
    });

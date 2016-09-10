/*here i define my home page controller which will control my home page view or data*/
angular.module("myApp")
    .controller("myMainController", function($scope, $cookies, $rootScope) {
        console.log("Main inside controller");

        //$cookies.put('userSession','myCurrentSession',[]);
        // console.log("my Current Session ::"+$cookies.get('userSession'));
        // console.log("After remove my Session");
        // $cookies.remove("userSession");
        // console.log("my Current Session ::"+$cookies.get("userSession"));
        // console.log($cookies);

    });

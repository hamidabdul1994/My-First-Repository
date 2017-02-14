;
(function() {
    function authInterceptor(API, auth) {
        return {
            // automatically attach Authorization header
            request: function(config) {
                return config;
            },

            // If a token was sent back, save it
            response: function(res) {
                return res;
            },
        }
    }

    function authService($window) {
        var self = this;

        // Add JWT methods here
    }

    function userService($http, API, auth, $q) {
        var self = this;
        self.getQuote = function() {
                return $http.get(API + '/auth/quote')
            }
            // add authentication methods here

        self.login = function(email, pass) {
            var deffered = $q.defer();
            // var data = {};
            // data.email = email;
            // data.password = pass;
            // console.log("Ecodeing::" + createJWT(data));
            if (email === "abc@gmail.com" && pass === "1234") {
                deffered.resolve({
                    "data": {
                        "message": email
                    }
                });
            } else {
                deffered.reject({
                    "data": {
                        "message": "User nor exist"
                    }
                });
            }
            return deffered.promise;
        }

        // function createJWT(user) {
        //     var config = {};
        //     config.TOKEN_SECRET = "My Code";
        //     var payload = {
        //         sub: user._id,
        //         iat: moment().unix(),
        //         exp: moment().add(14, 'days').unix()
        //     };
        //     return jwt.encode(payload, config.TOKEN_SECRET);
        // }

        self.saveToken = function(token) {
            $window.localStorage['jwtToken'] = token;
        }


        self.getToken = function() {
            return $window.localStorage['jwtToken'];
        }

        self.parseJwt = function(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        }

        self.isAuthed = function() {
            var token = self.getToken();
            if (token) {
                var params = self.parseJwt(token);
                return Math.round(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        }

    }

    // We won't touch anything in here
    function MainCtrl(user, auth, $base64) {
        var self = this;

        function myEncrypt(obj){
          var str = JSON.stringify(obj)
          console.log(str);
          var encoded=$base64.encode(str);
          console.log(encoded);
          var decoded=$base64.decode(encoded);
          console.log(decoded);
          console.log(JSON.parse(decoded));
        }

        function handleRequest(res) {
            var token = res.data ? res.data.token : null;
            if (token) {
                console.log('JWT:', token);
            }
            self.message = res.data.message;
        }

        myEncrypt({"email":"hamid_noori@gmail.com","password":"123456"});
        self.login = function() {
            user.login(self.username, self.password)
                .then(handleRequest, handleRequest)
        }
        self.register = function() {
            user.register(self.username, self.password)
                .then(handleRequest, handleRequest)
        }
        self.getQuote = function() {
            user.getQuote()
                .then(handleRequest, handleRequest)
        }
        self.logout = function() {
            auth.logout && auth.logout()
        }
        self.isAuthed = function() {
            return auth.isAuthed ? auth.isAuthed() : false
        }
    }

    angular.module('app', ["base64"])
        .factory('authInterceptor', authInterceptor)
        .service('user', userService)
        .service('auth', authService)
        .constant('API', 'http://test-routes.herokuapp.com')
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        })
        .controller('Main', MainCtrl)
})();

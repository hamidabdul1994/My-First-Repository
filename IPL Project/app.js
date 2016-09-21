angular.module("myApp", ["firebase", "angular-carousel-3d"])
    .controller("myIplctrl", function($scope, $firebase, $timeout) {



        // SLIDES WITH CAPTIONS
        //===================================
        // $scope.slides = [{
        //     'src': 'images/photo2.png',
        //     caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.'
        // }, {
        //     'src': 'images/photo3.png',
        //     caption: 'Lorem ipsum dolor sit amet '
        // }, {
        //     'src': 'images/photo4.png',
        //     caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        // }, {
        //     'src': 'images/photo5.png',
        //     caption: 'Lorem ipsum dolor sit amet,  Enim, maxime.'
        // }, {
        //     'src': 'images/photo6.png',
        //     caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.'
        // }];

        $scope.options = {
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 1,
            border: 0,
            dir: 'ltr',
            width: 360,
            height: 400,
            space: 300,
            autoRotationSpeed: 2500,
            loop: true
        };

        var imageLoc = [],
            imageArray = [],
            i;
        //Refference to take data from Firebase Database
        var ref = firebase.database().ref();
        ref.on("value", function(snapshot) {
            $timeout(imageLoc = snapshot.val().team_info, 100);
            copyArray();
        }, function(error) {
            console.log("Error: " + error.code); //
        });

        var copyArray = function() {
            for (i in imageLoc) {
                $scope.getMyImage(imageLoc[i].team_img_url, function(url) {
                    imageArray.push({
                        'src': url,
                        'caption': imageLoc[i].team_captain
                    });
                    console.log(url);
                });
            }
            console.log("end");
            for (i in imageArray)
                console.log(imageArray[i].src + "----" + i + "" + imageArray[i].caption);
        }

          $scope.getMyImage(path,callback){

            callback(url);
          }

loh
        //Function to Get image url from google cloud
        $scope.getMyImage = function(path, callback) {

            var storageRef = firebase.storage().ref();
            storageRef.child(path).getDownloadURL().then(function(url) {

                callback(url);
            }).catch(function(error) {
                // Handle any errors
            });
        }
    });

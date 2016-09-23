angular.module("myApp")
    .controller("teamInfoCtrl", function($scope, $firebase, $stateParams) {
       var teamName = $stateParams.teamname;
      //Refference to take data from Firebase Database
      var ref = firebase.database().ref(teamName);
      ref.on("value", function(snapshot) {
          copyArray(snapshot.val());
        });
      }, function(error) {
          console.log("Error: " + error.code); //
      });

      Copy the path and calling the URL path function to take Google Cloud
      var copyArray = function(teamValue) {
          //var i;
          $scope.slides = [];
          angular.forEach(teamValue , function (value,key){

        });
         {
              $scope.getMyImage(imageLoc[i].team_img_url, imageLoc[i].team_name, function(url, caption) {
                  $scope.slides.push({
                      'src': url,
                      'caption': caption,
                      'url': caption.replace(/\s+/g, '')
                  });
              });
          }
      }


      //Function to Get image url from google cloud
      var getMyImage = function(path, caption, callback) {

          var storageRef = firebase.storage().ref();
          storageRef.child(path).getDownloadURL().then(function(url) {

              callback(url, caption);
          }).catch(function(error) {
              // Handle any errors
          });
      }

    });

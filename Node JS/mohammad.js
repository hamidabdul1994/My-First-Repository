var express = require('express');
var firebase = require('firebase');
var app = express();
var bodyParser = require('body-parser');
app.set('port', process.env.NODE_PORT || 3030); //It is simply assign 3030 port
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoJKeLw88V9vRQd3aXvkFfpB3NnmhxuHA",
    authDomain: "hidustanmanthan.firebaseapp.com",
    databaseURL: "https://hidustanmanthan.firebaseio.com",
    storageBucket: "hidustanmanthan.appspot.com",
    messagingSenderId: "1004911055422"
  };
  
var firebase=firebase.initializeApp(config);

app.get('/firebase', function (req, res) {
   var ref;// = new Firebase("https://hidustanmanthan.firebaseio.com/news/"); //This is Basic Javascript code only for front end
	ref = firebase.database().ref('news');

	ref.on("value", function(snapshot) {
		console.log(snapshot);
		res.send(snapshot.val()) //To return Data to front end
		snapshot.forEach(function(record) { 
		//ordered records, see comment
			console.log(record);
		});
		
	});
})


app.get('/secondMethod', function (req, res) {
   firebase.database().ref('news').once('value').then(function(snapshot) {
		res.send(snapshot.val()) //To return Data to front end

		/*for (record in snapshot.val()) { //unordered records, see comment
			//document.write(record)
			console.log( record );
	  }*/
   });
});

//It assigning you server code to port
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
console.log()

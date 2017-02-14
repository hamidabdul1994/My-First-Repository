var redis = require('redis');
var app = require('express')();
var responseTime = require('response-time')
var client = redis.createClient();


app.set('port', (process.env.PORT || 5001));
// set up the response-time middleware
app.use(responseTime());

/**
client.on('connect', function() {
    console.log('connected');
});
//client.set('framework','Angular JS');
client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);
});
client.get('framework', function(err, reply) {
    console.log(reply);
});
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});
client.rpush(['frameworks', 'angularjs', 'backbone'], function(err, reply) {
    console.log(reply,err); //prints 2
});

**/
app.get('/api', function(req, res) {

  var username = req.params.username;
client.get(username, function(error, result) {
      if (result) {
        // the result exists in our cache - return it to our user immediately
        res.send({ "totalStars": result, "source": "redis cache" });
      } else {
		var totalStars=786;
            client.setex(username, 60, totalStars);
	res.send({ "totalStars": totalStars, "source": "From Server" });
      }
});
});

app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});

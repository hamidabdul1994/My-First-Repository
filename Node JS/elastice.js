var elasticsearch = require('elasticsearch');

// Connect to localhost:9200 and use the default settings
//var client = new elasticsearch.Client();


// Connect the client to two nodes, requests will be
// load-balanced between them using round-robin
var client = elasticsearch.Client({
  hosts: [
    'elasticsearch1:9200',
    'elasticsearch2:9200'
  ]
});

// index a document
client.index({
  index: 'blog',
  type: 'post',
  id: 1,
  body: {
    title: 'JavaScript Everywhere!',
    content: 'It all started when...',
    date: '2013-12-17'
  }
}, function (err, resp) {
console.log(err, resp)
});


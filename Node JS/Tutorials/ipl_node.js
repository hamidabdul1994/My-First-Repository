var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");
var Schema = mongoose.Schema;
var mySchema = new Schema({
teamName:String,
teamOwner:String,
teamPlayer:[{
  playerName:String,
  playerStyle:String
}]
},{collection:"test"});
var model = mongoose.model("team",mySchema);
// var data = new model({teamName:"b",teamOwner:"2"});
// var a = data.save();
// a.then(function (s) {
//   console.log(s);
// }).catch(function (e) {
//   console.log(e);
// });

model.update({teamName:"b"},
{
 $push : {
    teamPlayer:{
             "playerName": "TTeam B Player A",
             "playerStyle": "6.9389939"
           }
  }
},{upset:true},function() {

});


// model.findOneAndUpdate({teamName:"b"}, {$push: {teamPlayer:{
//                  "playerName": "Player ",
//                  "playerStyle": "6.9389939"
//                }}},
//                function(err, model) {
//                    console.log(err);
//                    console.log(model);
//                });
//

// model.find({teamName:"b"}, function(err, info) {
//   model.findByIdAndUpdate(
//       info[0]._id,
//       {$push: {  teamPlayer:{
//                  "playerName": "Player A",
//                  "playerStyle": "6.9389939"
//                }}},
//       {safe: true, upsert: true},
//       function(err, model) {
//           console.log(err);
//           console.log(model);
//       }
//   );
//
// })

//mongo test [DataBase Name] < FileNAme.js

var listId = ["id1", "id2", "id3"]; 

var cursor =  db.collection.find({fid: {$in: listId}}).sort({_id: 1}).limit(9); 


// iterate over documents
if (cursor != null && cursor.hasNext()){
  while (cursor.hasNext()){
   // print documents
   print(JSON.stringify(cursor.next())); 
  }
}

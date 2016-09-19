var fs = require("fs");
console.log("symlink function");
fs.readlink("input.txt",function(error,stringPath){
  if(error)
  console.log("errro:",error);
  console.log(stringPath);
});

var symlinkPrecommit = function (callback) {

  console.log("\n > Creating pre-commit symlink in .git/hooks/pre-commit\n");

  source = path.resolve('.git/hooks/pre-commit');
  target = path.resolve('mkdir.js');

  fs.symlink(source, target, 'file', function (err) {
    if (err) {
      console.log(
        err.code === 'EEXIST' ? "Link already created!\n" : "Error\n"
      );
      console.log(err);
    }
    if (callback) callback();
  });

}

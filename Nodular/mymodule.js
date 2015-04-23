var fs = require('fs');
var path  = require('path');

function name (where, extension, callback) {

  fs.readdir(where, function (err, list) {
    if (err){
      return callback(err);
      }
    var results = list.filter(function (file) {
      return path.extname(file) === '.' + extension
    })
    callback (null, results)
  });
}
module.exports = name;


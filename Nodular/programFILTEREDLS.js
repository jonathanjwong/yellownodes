/*
PROMPT
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.
*/

var fs = require('fs');
var path = require('path');
var paths = process.argv[2];
var given = '.' + process.argv[3];
fs.readdir(paths, function (err, list) {
  for (i = 0; i < list.length; i++) {
    if (given == path.extname(list[i])) {
        console.log(list[i]);
    }
  }
  //console.log(list);      gives me the full list
  //console.log(process.argv[3]);     checking what file type that needs filtering
  //path.extname(list); go through the array [list] and check if the extnames match...use [list.length] for array length...use first i/o program.js as a reference for that.
  // '.' + process.argv[3] works in adding the period and changing into a string
});


/*
GIVEN ANSWER
    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/
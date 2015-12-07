var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
	list.forEach(function(file){
		if ('.' + process.argv[3] === path.extname(file))
			console.log(file)
	});
});
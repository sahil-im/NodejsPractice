const filesystem = require("fs");
var data ='Sahil mujawar' ;

const WriteStream =filesystem.createWriteStream('output.txt');

WriteStream.write(data, 'utf8');

WriteStream.end();

WriteStream.on("finish" ,() => {

    console.log('finished Writing');
});

WriteStream.on("error", (error) => {
	console.log(error.stack);
});
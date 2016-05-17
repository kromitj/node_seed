var fs = require('fs');
var fakerList = require('./modules/fakerList.js');

var numOfFields = process.argv.length;

if (numOfFields < 1) {
  console.error("You didn't add any fields....");
  process.exit()
} else if (numOfFields % 2 === 1) {
  console.error("You gave an uneven amount of field-valuetype pairs");
  process.exit()
};

var numOfPairs = (numOfFields-2)/2;
var json = {};
for(var i=0; i < numOfPairs; i++) {
  var field = process.argv[(i*2)+2];
  var dataType = process.argv[(i*2)+3];
  json[field] = dataType;
}
fs.writeFile("schema.json", JSON.stringify(json, null, "\t"), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
  


// example
// node schemaGenerator.js f_name firstName l_name lastName username useName 



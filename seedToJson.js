var fs = require('fs');
var fakerList = require('faker');
var fakerList = require('./modules/fakerList.js');
console.log(fakerList)
var schema = JSON.parse(fs.readFileSync('schema.json', 'utf8'));
var seedCount = process.argv[2] || 10;
var seeds = [];

var keys = [];
for (var key in schema) {
  if (schema.hasOwnProperty(key)) {
    keys.push(key);
  }
}
  for (var count = 0; count < seedCount; count++) {
    var seed = {}
    for (var key in keys) {
      dataType = schema[keys[key]];
      console.log(dataType);
      var fakerValue = fakerList.getDataType(dataType); 
      console.log(fakerValue);
      seed[keys[key]] = fakerValue();  
    }
    seeds.push(seed);   
  }
 fs.writeFile("./seeds/Seed.json", JSON.stringify(seeds, null, "\t"), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
 
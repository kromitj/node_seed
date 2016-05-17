var faker = require('faker');
var list = {
  f_name: function() {
    return faker.name.firstName()
  },
  l_name: function() {
    return faker.name.lastName()
  },
  username: function() {
    return faker.internet.userName()
  },
  password_default: function() {
    return "password"
  },
}

exports.getDataType = function(dataType) {
  return list[dataType];
};
exports.getList = function() {
  return list;
};
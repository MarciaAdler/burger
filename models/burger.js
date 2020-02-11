// Import orm.js
var orm = require("../config/orm.js");
// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, condition, cb) {
    orm.updateOne("burgers", col, condition, function(res) {
      cb(res);
    });
  }
};
// export at the end of the burger.js file

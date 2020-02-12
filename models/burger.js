// Import orm.js
var orm = require("../config/orm.js");
// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    console.log("objvals", objColVals);
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    console.log("condition", condition);
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};
// export at the end of the burger.js file
module.exports = burger;

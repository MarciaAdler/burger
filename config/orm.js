// import connection.js
var connection = require("../config/connection.js");
// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//selectAll()

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    var query = `INSERT INTO ${table}(${col}) ("${val}")`;
    console.log(query);
    connectionl.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, col, condition, cb) {
    var query = `UPDATE ${table} SET ${col} = true WHERE ${condition}`;

    console.log(query);
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
//insertOne()
//updateOne()
// Export the ORM object in module.exports.

module.exports = orm;

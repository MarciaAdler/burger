// import connection.js
var connection = require("../config/connection.js");
// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//selectAll()
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

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
    var query = `INSERT INTO ${table} (${col}) VALUES ('${val}')`;
    console.log("post", query);
    connection.query(query, function(err, result) {
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

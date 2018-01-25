var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, colName1, colName2, Val1, Val2, cb) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, colName1, colName2, Val1, Val2], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, colName, updatedVal, condition, cb) {
    var queryString =
      "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(
      queryString,
      [tableInput, colName, updatedVal, condition],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;

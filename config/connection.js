  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "something",
    database: "burgers_db"
  });

if(process.env.JAWSDB_URL){
  connection = mysqlcreateConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "something",
    database: "burgers_db"
  });
};



  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  });


module.exports = connection;
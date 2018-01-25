var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(Val1, cb) {
    orm.insertOne("burgers", "burger_name", "devoured", Val1, false,  function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne("burgers","devoured",true, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burgers;
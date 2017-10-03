var orm = require("../config/orm.js");

// Code that calls the ORM functions using burger specific input for the ORM
var burger = {

  // Select all burgers
  selectAll: function(bb) {
    orm.selectAll("burgers", function(res) {
      bb(res);
    });
  },

  // Insert for adding a new burger
  insertOne: function(cols, vals, bb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      bb(res);
    });
  },

  // Update a burger status (devoured vs. not devoured)
  updateOne: function(objColVals, condition, bb) {
    orm.updateOne("burgers", objColVals, condition, function(res){
      bb(res);
    });
  }
};

module.exports = burger;

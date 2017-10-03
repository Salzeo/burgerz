var connection = require("./connection.js");

// a function that will be used to build queries
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


// Helper function for SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    // if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    // }
  }
  return arr.toString();
}

// Object Relational Mapper (ORM)
var orm = {
  // selectAll function for grabbing all table data
  selectAll: function(tableInput, bb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
      // Send the query result back to the callback function (bb)
      bb(result);
    });
  },
  // Inserts a burger
  insertOne: function(table, cols, vals, bb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      // send the query result back to the callback function
      bb(result);
    });
  },
  updateOne: function(table, objColVals, condition, bb) {
    var queryString = "UPDATE " + table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // send the query result back to the callback function
      bb(result);
    });
  }
};

module.exports = orm;

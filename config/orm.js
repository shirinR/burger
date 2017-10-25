// selectAll()
// insertOne()
// updateOne()

var connection = require("./config/connection.js");

function questionMarks(placeHolder){
  var arr = [];
  for(var i=0; i<placeHolder.length; i++){
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm ={
  selectAll: function(table, outPut){
    var queryString = 'SELECT * FROM' + table + ';';
    connection.query(queryString, function(err, result){
      if(err) throw err;
      outPut(result);
    });
  },
  insertOne:function(table, cols, vals, outPut){
    var queryString = 'INSERT INTO' + table + "(" + cols.toString() + ")" + "VALUES (";
    queryString += questionMarks(vals.length);
    queryString += ");";

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      outPut(result);
    });
  },
  updateOne: function(table, objColVals, condition, outPut){
    var queryString = 'UPDATE' + table + 'SET';
    queryString += objToSql(objColVals);
    queryString += 'WHERE' + condition +';';

    connection.query(queryString, function(err, result){
      if(err) throw err;
      outPut(result);
    });
  }
};

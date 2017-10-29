var connection = require("../config/connection.js");

function questionMarks(placeHolder){
  var arr = [];
  for(var i=0; i<placeHolder; i++){
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
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result){
      if(err) throw err;
      outPut(result);
    });
  },
  insertOne:function(table, col, val, outPut){
    var queryString = "INSERT INTO " + table +  " (" + col.toString() + ") VALUES (" + questionMarks(val.length) + ") ";

    console.log("vals: ", val);
    // connection.query(queryString, val, function(err, result){
    //   if (err) throw err;
    //   outPut(result);
    // });
  },
  updateOne: function(table, objColVals, condition, outPut){
    var queryString = 'UPDATE ' + table + ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ' + condition +';';

    connection.query(queryString, function(err, result){
      if(err) throw err;
      outPut(result);
    });
  }
};

module.exports = orm;

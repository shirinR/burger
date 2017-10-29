var orm = require('../config/orm.js');

var burger ={
  selectAll: function(outPut){
    orm.selectAll("burgers", function(res){
      outPut(res);
    });
  },
  insertOne:function(cols, vals, outPut){
    orm.insertOne("burgers", cols, vals, function(res){
      outPut(res);
    });
  },
  updateOne: function(objColVals, condition, outPut){
    orm.updateOne("burgers", objColVals, condition, function(res){
      outPut(res);
    });
  }
};

module.exports = burger;

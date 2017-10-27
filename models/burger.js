var orm = require('../config/orm.js');

var burger ={
  selectAll: function(outPut){
    orm.selectAll("burgers", function(res){
      outPut(outPut);
    });
  },
  insertOne:function(cols, vals, outPut){
    orm.insertOne("burgers", cols, vals, function(res){
      outPut(outPut);
    });
  },
  updateOne: function(objColVals, condition, outPut){
    orm.updateOne("burgers", objColVals, condition, function(res){
      outPut(outPut);
    });
  }
};

module.exports = burger;

var orm = require('./config/orm.js');

var burger ={
  selectAll: function(outPut){
    orm.selectAll("burger", function(res){
      outPut(result);
    });
  },
  insertOne:function(cols, vals, outPut){
    orm.insertOne("burger", cols, vals, function(res){
      outPut(result);
    });
  },
  updateOne: function(objColVals, condition, outPut){
    orm.updateOne("burger", objColVals, condition, function(res){
      outPut(result);
    });
  }
};

module.exports = burger;

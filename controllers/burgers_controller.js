var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req,res){
  burger.selectAll(function(result){
    var hbsObject = {
      burgers: result
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req,res){
      console.log('>>>>', req.body);
  burger.insertOne("burger_name",[req.body], function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req,res){
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;

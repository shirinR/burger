var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req,res){
  burger.selectAll(function(result){
    var burgersObj = {
      burgers: result
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  //  res.end();
  });
});

router.post("/api/burger", function(req,res){
  burger.insertOne(["burger_name","devoured"],[
    req.body.burger_name, req.body.devoured
  ], function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req,res){
  var condition = "id = " + req.params.id;
  burger.update({
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

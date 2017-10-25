var express = require('express');
var burger = require("./models/burger.js");

var router = express.Router();

router.get("/index", function(req,res){
  burger.selectAll(function(result){
    var burgersObj = {
      burgers: result
    };
    res.render("index", burgersObj);
  });
});

router.post("/index", function(req,res){
  burger.insertOne(["burger_name","devoured"],[
    req.body.burger_name, req.body.devoured
  ], function(result){
    res.json({ id: result.insertId });
  });
});

router.put("/index", function(req,res){
  burger.updateOne
});

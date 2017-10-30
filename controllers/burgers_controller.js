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
  burger.insertOne(["burger_name", "devoured"],[req.body.burger_name, false], function(result){
    res.redirect("/");
  });
});

router.put("/:id", function(req,res){
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

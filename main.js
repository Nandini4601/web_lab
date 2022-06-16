// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import * as body_parser from "body-parser";

// var app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cdb");
var nameSchema = new mongoose.Schema({
  c_name: String,
  size: String,
  cid: String,
  price: String,
});
var Users_model = mongoose.model("clo_lis", nameSchema); //collection name

app.use(express.static("public"));

app.post("/insert", function (req, res) {
  const userDoc = new Users_model({
    c_name: req.body["c_name"],
    size: req.body["size"],
    cid: req.body["cid"],
    price: req.body["price"],
  });
  userDoc.save();
  res.send("Data Successfully Inserted!");
});

app.get("/users", function (req, res) {
  Users_model.find({}, function (err, result) {
    if (err) {
      console.log(err);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.delete("/users", (req, res) => {
  var name_del = req.query.cid;
  console.log(name_del);
  var myquery = { cid: name_del };
  Users_model.deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log(obj);
    console.log("1 document deleted");
  });
  Users_model.find({}, function (err, result) {
    if (err) {
      console.log(err);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

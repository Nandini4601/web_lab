

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cloth_users_db");
var nameSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: String,
  pwd: String,
});
var Users_model = mongoose.model("users_cols", nameSchema); //collection name

app.use(express.static("public"));

app.post("/insert", function (req, res) {
  const userDoc = new Users_model({
    f_name: req.body["f_name"],
    l_name: req.body["l_name"],
    email: req.body["email"],
    pwd: req.body["pwd"],
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
  var name_del = req.query.email;
  console.log(name_del);
  var myquery = { email: name_del };
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

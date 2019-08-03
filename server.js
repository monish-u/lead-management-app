var express = require("express");
let mysqlAdapter = require("./mysqldbadapter");
var bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.disable("etag");

function sendJsonResult(res, obj) {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(obj));
  }, 1000);
}
app.use(express.static(__dirname + "/dist/lead-management-app"));
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening!");
});
app.post("/api/registerCustomer", function(req, res) {
  mysqlAdapter.registerUser(req.body, data => {
    sendJsonResult(res, data);
  });
});
app.loginBorrower("/api/loginBorrower", (req, res) => {});

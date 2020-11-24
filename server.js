var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Load ContactCtl
const contactsCtl = require("./ctl/contactsCtl");

app.get("/", function (req, res) {
  res.send("Welcome to the application");
});

// List of all contacts
app.get("/contacts", function (req, res) {
  contactsCtl.getContactsList(req, res);
});

// Create a new contact
app.post("/contacts", function (req, res) {
  contactsCtl.createContact(req, res);
});

// Update a contact
app.put("/contacts/:id", function (req, res) {
  contactsCtl.updateContact(req, res);
});

// Get a specific contact
app.get("/contacts/:id", function (req, res) {
  contactsCtl.getContact(req, res);
});

// Delete a contact
app.delete("/contacts/:id", function (req, res) {
  contactsCtl.deleteContact(req, res);
});

// Get a call-list
app.get("/callList", function (req, res) {
  contactsCtl.getCallList(req, res);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://localhost:%s", port);
});

module.exports = app;

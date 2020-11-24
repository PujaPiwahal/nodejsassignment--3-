const contactsDAO = require("../dao/contactsDAO");

class ContactsCtl {
  // List of all contacts
  getContactsList = function (req, res) {
    contactsDAO
      .list()
      .then((rs) => {
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };

  // Create a new contact
  createContact = function (req, res) {
    contactsDAO
      .create(req.body)
      .then((rs) => {
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };

  // Update a contact
  updateContact = function (req, res) {
    contactsDAO
      .update(req.params.id, req.body)
      .then((rs) => {
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };

  // Get a specific contact
  getContact = function (req, res) {
    contactsDAO
      .get(req.params.id)
      .then((rs) => {
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };

  // Delete a contact
  deleteContact = function (req, res) {
    contactsDAO
      .del(req.params.id)
      .then((rs) => {
        res.setHeader("Content-Type", "application/json");
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };

  // Get a call-list
  getCallList = function (req, res) {
    contactsDAO
      .callList()
      .then((rs) => {
        res.json(rs);
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  };
}

module.exports = new ContactsCtl();

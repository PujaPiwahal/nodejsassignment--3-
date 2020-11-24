var Datastore = require("nedb-promises");
var contactsDB = new Datastore({ filename: "contacts.db", autoload: true });

class ContactsDAO {
  async create(dto) {
    return contactsDB.insert(dto);
  }

  async update(id, dto) {
    return contactsDB.update({ _id: id }, dto);
  }

  async del(id) {
    return contactsDB.remove({ _id: id });
  }

  async get(id) {
    return contactsDB.find({ _id: id });
  }

  async list() {
    return contactsDB.find();
  }

  async callList() {
    return contactsDB
      .find({ phone: { $elemMatch: { type: "home" } } })
      .sort({ "name.last": 1, "name.first": 1 });
  }
}

module.exports = new ContactsDAO();

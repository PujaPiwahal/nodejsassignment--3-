let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("../server");

//Our parent block
describe("Contacts", () => {
  /*
   * Test the /GET/contacts route
   */
  describe("/GET contacts", () => {
    it("it should GET all the contacts", (done) => {
      chai
        .request(server)
        .get("/contacts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  /*
   * Test the /GET/callList route
   */
  describe("/GET callList", () => {
    it("it should GET callList", (done) => {
      chai
        .request(server)
        .get("/callList")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe("/POST contacts", () => {
    it("it should POST a contacts without error", (done) => {
      let contact = {
        name: {
          first: "Harold",
          middle: "Francis",
          last: "Gilkey",
        },
        address: {
          street: "8360 High Autumn Row",
          city: "Cannon",
          state: "Delaware",
          zip: "19797",
        },
        phone: [
          {
            number: "302-611-9148",
            type: "home",
          },
          {
            number: "302-532-9427",
            type: "mobile",
          },
        ],
        email: "harold.gilkey@yahoo.com",
      };
      chai
        .request(server)
        .post("/contacts")
        .send(contact)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe("/GET/:id contacts", () => {
    it("it should GET a contact by the given id", (done) => {
      const id = "pqDxFOEaBDmH2WKz";
      chai
        .request(server)
        .get("/contacts/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body[0].should.have.property("name");
          res.body[0].should.have.property("address");
          res.body[0].should.have.property("phone");
          res.body[0].should.have.property("email");
          res.body[0].should.have.property("_id").eql(id);
          done();
        });
    });
  });

  /*
   * Test the /PUT route
   */
  describe("/PUT contacts", () => {
    it("it should PUT a contacts without error", (done) => {
      const id = "pqDxFOEaBDmH2WKz";
      let contact = {
        name: {
          first: "Harold",
          middle: "Francis",
          last: "Gilkey",
        },
        address: {
          street: "8360 High Autumn Row",
          city: "Cannon",
          state: "Delaware",
          zip: "19797",
        },
        phone: [
          {
            number: "302-611-9148",
            type: "home",
          },
          {
            number: "302-532-9427",
            type: "mobile",
          },
        ],
        email: "harold.gilkey@yahoo.com",
      };
      chai
        .request(server)
        .put("/contacts/" + id)
        .send(contact)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal(1);
          done();
        });
    });
  });

  /*
   * Test the /DELETE route
   */
  describe("/DELETE contacts", () => {
    it("it should DELETE a contacts without error", (done) => {
      const id = "KUrjl99xl6fZ8vdu";
      chai
        .request(server)
        .delete("/contacts/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal(1);
          done();
        });
    });
  });
});

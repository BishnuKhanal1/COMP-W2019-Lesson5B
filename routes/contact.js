let express = require("express");
let router = express.Router();
//also requre mongoose
let mongoose = require("mongoose");

//create a reference to the database schema (which is in in models)
//for this we need models folder //make models folder

let contactModel = require("../models/contact"); //reference to contact.js file in models folder

//now we need to use the router
/*Get Contact List Page - read operation */
router.get("/", (req, res, next) => {
  contactModel.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(contactList);

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});
//get route for the add page/ this willl display the add page
router.get("/add", (req, res, next) => {
  res.render("contacts/add", {
    title: "Add New Contact"
  });
});
//post route
router.post("/add", (req, res, next) => {
  //console.log(req.body);

  let newContact = contactModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  contactModel.create(newContact, (err, contactModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refersh contact list
      res.redirect("contact-list");
    }
  });
});
module.exports = router;

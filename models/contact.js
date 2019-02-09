let mongoose = require("mongoose");

//create a model class
//schema- schema is basicaaly a table structure
let contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "first" //this collection refers to first collecteion we created
  }
);
module.exports = mongoose.model("contact", contactSchema);

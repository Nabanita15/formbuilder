const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
  responses: { type: Map, of: String },
});

module.exports = mongoose.model("Response", ResponseSchema);

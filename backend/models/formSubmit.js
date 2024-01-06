const mongoose = require('mongoose');

const formSubmitSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true }
});

const Form = mongoose.model('Form', formSubmitSchema);

module.exports = Form;

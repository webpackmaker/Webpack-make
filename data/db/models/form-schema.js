const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newFormSchema = new Schema({
  cookieID: { type: String },
  0: { type: String },
  1: { type: String },
  2: { type: String },
  3: { type: String }
  // needs filling out with questionnaire
});

const Form = mongoose.model('Form', newFormSchema);

module.exports = Form;

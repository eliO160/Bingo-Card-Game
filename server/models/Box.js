const mongoose = require('mongoose');
// schema for Box model
const boxSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});
// creates Box model based on the schema
const Box = mongoose.model('Box', boxSchema);
// exports the Box model for use in other files
module.exports = Box;
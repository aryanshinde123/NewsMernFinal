const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  information: { type: String },
  imageUrl: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);

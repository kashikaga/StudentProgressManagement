const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  cfHandle: String,
  currentRating: Number,
  maxRating: Number,
  lastSynced: Date,
  reminderCount: { type: Number, default: 0 },
  reminderDisabled: { type: Boolean, default: false },
  contests: Array,
  submissions: Array
});

module.exports = mongoose.model('Student', studentSchema);
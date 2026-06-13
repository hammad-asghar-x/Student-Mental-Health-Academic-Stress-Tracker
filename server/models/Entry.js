const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Links to the User model
  },
  mood: {
    type: Number,
    required: [true, 'Mood is required'],
    min: [1, 'Mood must be at least 1'],
    max: [10, 'Mood cannot exceed 10'],
  },
  stress: {
    type: Number,
    required: [true, 'Stress level is required'],
    min: [1, 'Stress must be at least 1'],
    max: [10, 'Stress cannot exceed 10'],
  },
  notes: {
    type: String,
    default: '', // Optional daily notes
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Entry', entrySchema);
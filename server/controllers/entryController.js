const Entry = require('../models/Entry');

// @desc    Create a new mood/stress entry
// @route   POST /api/entries
// @access  Private (Student only)
const createEntry = async (req, res) => {
  try {
    const { mood, stress, notes, isAnonymous } = req.body;

    // Basic validation (Mongoose also does this, but good for early feedback)
    if (!mood || !stress) {
      return res.status(400).json({ message: 'Please provide both mood and stress levels' });
    }

    const entry = await Entry.create({
      userId: req.user._id, // Comes from the auth middleware
      mood,
      stress,
      notes: notes || '',
      isAnonymous: isAnonymous || false,
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get logged-in user's entries
// @route   GET /api/entries
// @access  Private
const getUserEntries = async (req, res) => {
  try {
    // Find all entries for this user, sorted by date (newest first)
    const entries = await Entry.find({ userId: req.user._id })
      .sort({ date: -1 })
      .limit(30); // Limit to last 30 entries for performance

    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createEntry, getUserEntries };
const express = require('express');
const router = express.Router();
const { createEntry, getUserEntries } = require('../controllers/entryController');
const { protect } = require('../middleware/authMiddleware');

// Both routes are protected: user MUST be logged in to access them
router.post('/', protect, createEntry);
router.get('/', protect, getUserEntries);

module.exports = router;
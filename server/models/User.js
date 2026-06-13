const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // 🔒 Security: Never send the password back in API responses by default
  },
  role: {
    type: String,
    enum: ['student', 'counselor', 'admin'],
    default: 'student', // By default, anyone who registers is a student
  },
  studentId: {
    type: String,
    // Only required for students, so we leave it optional here
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
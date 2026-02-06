const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  pointsReward: {
    type: Number,
    required: true,
    default: 10
  },
  // Type of mission: 'DAILY' only as per requirements
  type: {
    type: String,
    enum: ['DAILY'],
    default: 'DAILY'
  },
  // The criteria to unlock/complete this mission
  // e.g. condition: "LOGIN_STREAK", targetValue: 3
  condition: {
    type: String, // e.g., 'COMPLETE_MODULE', 'LOGIN', 'HIGH_SCORE', 'ANSWER_QUIZ'
    required: true
  },
  targetValue: {
    type: Number,
    default: 1
  },
  
  // Categorize: is it a 'QUIZ' or a specific 'TASK'?
  category: {
    type: String,
    enum: ['QUIZ', 'TASK'],
    default: 'TASK'
  },
  
  // Dynamic payload. 
  // If Quiz: { questions: [{ q: "...", options: [], correct: 0 }] }
  // If Task: { moduleId: "web-dev-101" }
  payload: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Mission', missionSchema);

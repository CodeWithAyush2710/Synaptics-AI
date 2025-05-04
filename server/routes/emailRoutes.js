const express = require('express');
const router = express.Router();
const { generateEmails } = require('../controllers/emailController');
const { protect } = require('../middleware/authMiddleware');

router.post('/generate', protect, generateEmails);

module.exports = router;
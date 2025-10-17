const express = require('express');
const router = express.Router();

// Demo registration endpoint (POST /registration)
router.post('/', (req, res) => {
  const { teamName, members } = req.body || {};

  // Validate teamName
  if (!teamName || typeof teamName !== 'string' || teamName.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Missing or invalid teamName',
    });
  }

  // Validate members array
  if (!Array.isArray(members) || members.length < 1 || members.length > 5) {
    return res.status(400).json({
      success: false,
      message: 'Members must be an array of 1 to 5 people',
    });
  }

  // Validate each member
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    if (!member || typeof member !== 'object') {
      return res.status(400).json({
        success: false,
        message: `Member ${i + 1} is missing or invalid`,
      });
    }
    if (!member.name || typeof member.name !== 'string' || member.name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: `Member ${i + 1} is missing a valid name`,
      });
    }
    if (!member.email || typeof member.email !== 'string' || member.email.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: `Member ${i + 1} is missing a valid email`,
      });
    }
  }

  // Demo response: echo back the team registration
  return res.status(201).json({
    success: true,
    message: 'Team registration received (demo)',
    data: {
      teamName,
      members,
      receivedAt: new Date().toISOString(),
    },
  });
});

module.exports = router;

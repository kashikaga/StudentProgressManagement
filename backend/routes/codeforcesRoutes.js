const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const cf = require('../services/codeforcesService');

router.post('/sync/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).send('Not found');

  const [info, contests, submissions] = await Promise.all([
    cf.fetchUserInfo(student.cfHandle),
    cf.fetchUserContests(student.cfHandle),
    cf.fetchUserSubmissions(student.cfHandle)
  ]);

  student.currentRating = info.rating;
  student.maxRating = info.maxRating;
  student.contests = contests;
  student.submissions = submissions;
  student.lastSynced = new Date();
  await student.save();

  res.json({ message: 'Synced', student });
});

module.exports = router;
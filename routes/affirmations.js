const express = require("express");
const router = express.Router();

const { Affirmation } = require("../models");

// Get all affirmations for a particular student
router.get('/:student', async (req, res) => {
    const studentName = req.params.student;
  
    try {
      const affirmations = await Affirmation.findAll({
        where: { student: studentName },
      });
  
      res.json(affirmations);
    } catch (error) {
      console.error('Error fetching affirmations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
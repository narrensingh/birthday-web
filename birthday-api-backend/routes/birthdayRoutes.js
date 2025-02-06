const express = require('express');
const router = express.Router();
const Birthday = require('../models/Birthday');

router.post('/', async (req, res) => {
  try {
    const { name, birthdate } = req.body;
    const newBirthday = new Birthday({ name, birthdate });
    await newBirthday.save();
    res.status(201).json({ message: 'Birthday added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const birthdays = await Birthday.find();
    res.json(birthdays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:name', async (req, res) => {
  try {
    const birthday = await Birthday.findOne({ name: req.params.name });
    if (!birthday)
      return res.status(404).json({ message: 'Birthday not found' });
    res.json(birthday);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:name', async (req, res) => {
  try {
    const updatedBirthday = await Birthday.findOneAndUpdate(
      { name: req.params.name },
      { birthdate: req.body.birthdate },
      { new: true }
    );

    if (!updatedBirthday)
      return res.status(404).json({ message: 'Birthday not found' });

    res.json({ message: 'Birthday updated successfully', updatedBirthday });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

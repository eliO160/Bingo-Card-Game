const express = require('express'); // Import express library to create routes
const router = express.Router(); // Create a new router object for handling routes
const Box = require('../models/Box'); // Import the Box model to interact with the database

//seed route: POST /api/boxes/seed
// This route seeds the database with predefined box prompts
router.get('/seed', async (req, res) => {
  try {
    await Box.deleteMany(); // Clear existing boxes
    const prompts = [
      "Wave to someone nearby", "Clap your hands", "Do a dance", "Say 'Bingo!'", "Take a deep breath",
      "Compliment a friend", "Stretch your arms", "Smile at the screen", "Share a fun fact", "Say your favorite food",
      "Point to the sky", "Snap your fingers", "Free space!", "Wiggle your fingers", "Act like an animal",
      "Tell a joke", "Make a funny face", "Give a thumbs up", "Say your favorite color", "Spin in your chair",
      "Pat your head", "Stand up", "Touch your nose", "Say 'hello' in another language", "Pretend to jump rope"
    ];

    const boxDocs = prompts.map(prompt => ({ text: prompt }));
    await Box.insertMany(boxDocs);

    res.status(201).json({ message: 'Boxes seeded successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all boxes: GET /api/boxes 
router.get('/', async (req, res) => {
  try {
    const boxes = await Box.find();
    res.json(boxes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//POST: /api/boxes/:id - update a box's text
router.put('/:id', async (req, res) => {
  const boxId = req.params.id; // Get the box ID from the request parameters
  const { text } = req.body; // Get the new text from the request body

  try {
    const updatedBox = await Box.findByIdAndUpdate(
      boxId, // Find the box by ID
      { text }, // Update the text field
      { new: true } // Return the updated box
    );
    res.json(updatedBox); // Send the updated box as the response
  } catch (err) {
    res.status(500).json({ error: 'Could not update box' }); // Handle errors
  }
});

module.exports = router;
const express = require("express");
const router = express.Router();

// Fake playlist map for demo
const moodToPlaylist = {
  happy: ["Happy - Pharrell", "Good Time - Owl City", "Can’t Stop the Feeling - JT"],
  sad: ["Let Her Go - Passenger", "Someone Like You - Adele", "Fix You - Coldplay"],
};

router.post("/", (req, res) => {
  const { mood } = req.body;
  const playlist = moodToPlaylist[mood.toLowerCase()] || ["No songs found for that mood."];
  res.json(playlist);
});

module.exports = router;

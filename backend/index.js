const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Enable CORS for requests from frontend (localhost:3000)
app.use(cors({
  origin: "http://localhost:3000", // frontend
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,  // Allow credentials
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Your mood route
app.post("/api/mood", (req, res) => {
  console.log("Request body:", req.body); // Log body for debugging
  const { mood } = req.body;

  if (!mood) {
    return res.status(400).json({ error: "Mood is required" });
  }

  // Dummy response
  res.json({ message: `Mood received: ${mood}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

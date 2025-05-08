import React, { useState } from "react";
import axios from "axios";

const MoodInput = ({ onPlaylistFetched }) => {
  const [mood, setMood] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!mood.trim()) {
      alert("Please enter a mood before submitting.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/mood",
        { mood },
        { withCredentials: true } // Ensure this is included for credentials to be sent
      );
       
      console.log("Response data:", response.data); 
      onPlaylistFetched(response.data.playlist);
    } catch (err) {
      console.error("Error sending mood:", err);
      alert("Failed to fetch playlist. Please try again.");
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 p-4">
        <input
          className="border p-2 rounded w-64"
          placeholder="Enter your mood (e.g., happy)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Get Playlist</button>
      </form>
    </div>
  );
};

export default MoodInput;

import React, { useState } from "react";
import MoodInput from "./components/MoodInput";
import PlaylistDisplay from "./components/PlaylistDisplay";

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Mood-Based Playlist Generator</h1>
      <MoodInput onPlaylistFetched={setPlaylist} />
      {playlist.length > 0 && <PlaylistDisplay playlist={playlist} />}
    </div>
  );
}

export default App;

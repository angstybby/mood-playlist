const PlaylistDisplay = ({ playlist }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Recommended Playlist:</h2>
      <ul className="list-disc ml-6 mt-2">
        {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDisplay;

const postPlaylist = async (token, title, tracks) => {
    try {
      // Get the user's Spotify ID
      const userResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await userResponse.json();
      const userId = userData.id;
  
      // Create a new playlist
      const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: title,
          public: false, 
        }),
      });
      const playlistData = await playlistResponse.json();
      const playlistId = playlistData.id;
  
      // Add tracks to the playlist
      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ uris: tracks }),
      });
  
      console.log('Playlist saved successfully!');
    } catch (error) {
      console.error('Error saving playlist:', error.message);
    }
  };
  
  export default postPlaylist;
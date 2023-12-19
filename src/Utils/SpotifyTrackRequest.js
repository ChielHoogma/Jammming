const searchTracks = async (token, query) => {
    console.log("test");
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.tracks.items;
      } else {
        console.error('Failed to fetch tracks:', response.statusText);
      }
    } catch (error) {
      console.error('Error during track search:', error);
    }
  };

export default searchTracks;
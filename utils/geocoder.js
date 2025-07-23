
const axios = require('axios');

const geocodeLocation = async (location) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`;

  const response = await axios.get(url, {
    headers: {
      'User-Agent': process.env.USER_AGENT,
    }
  });

  const result = response.data[0];

  if (!result) {
    throw new Error('Location not found.');
  }

  return {
    type: 'Point',
    coordinates: [parseFloat(result.lon), parseFloat(result.lat)]
  };
}

module.exports = geocodeLocation;

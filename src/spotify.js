const Spotify = require('node-spotify-api');

const spotify = new Spotify({
  id: process.env.ID,
  secret: process.env.SECRET,
});

const search = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await spotify.search({ type: 'artist', query: name });
    res.status(200).send(response.artists);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  search,
};

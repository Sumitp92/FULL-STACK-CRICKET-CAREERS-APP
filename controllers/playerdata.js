const Player = require('../models/players');  
// Function to create a new player
const postPlayer = async (req, res) => {
    try {
      const player = await Player.create({
        name: req.body.name,
        dob: req.body.dob,
        imageUrl: req.body.imageUrl,
        birthPlace: req.body.birthPlace,
        career: req.body.career,
        numberOfMatches: req.body.numberOfMatches,
        score: req.body.score,
        fifties: req.body.fifties,
        centuries: req.body.centuries,
        wickets: req.body.wickets,
        average: req.body.average
      });
      res.json({ success: true, newPlayerDetails: player });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error creating player' });
    }
  };

// Function to get all players
const getPlayer = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json({ success: true, allPlayerDetails: players });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching players' });
  }
};

// Function to find a player by name
const getfindPlayer = async (req, res) => {
  try {
    const name = req.params.playerName;
    const player = await Player.findOne({ where: { name: name } });
    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }
    res.json({ success: true, playerDetails: player });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching player' });
  }
};

// Function to update a player by ID
const updatePlayer = async (req, res) => {
  try {
    const id = req.params.playerId;  // Get the player ID from request parameters
    const player = await Player.findByPk(id);  // Find the player by ID
    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }
    // Update the player details with the provided data
    await player.update(req.body);  // Update the player in the database
    res.json({ success: true, updatedPlayerDetails: player });  // Send the updated player details as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating player' });
  }
};

// Export the functions without deletePlayer
module.exports = { postPlayer, getPlayer, getfindPlayer, updatePlayer };
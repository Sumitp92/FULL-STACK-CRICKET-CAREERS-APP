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
    const id = req.params.playerId;  
    const player = await Player.findByPk(id);  
    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }
    
    await player.update(req.body);  
    res.json({ success: true, updatedPlayerDetails: player });  
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating player' });
  }
};


module.exports = { postPlayer, getPlayer, getfindPlayer, updatePlayer };
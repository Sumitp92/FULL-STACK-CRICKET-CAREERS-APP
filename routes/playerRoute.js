// routes/playerRoutes.js

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerdata'); // Adjust the path as necessary

// Route to create a new player
router.post('/player-info', playerController.postPlayer);

// Route to get all players
router.get('/player-info', playerController.getPlayer);

// Route to find a specific player by name
router.get('/player-info/:playerName', playerController.getfindPlayer);

// Route to update a player's information by ID
router.put('/player-info/:playerId', playerController.updatePlayer);

module.exports = router;
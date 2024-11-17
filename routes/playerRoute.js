const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerdata'); 


router.post('/player-info', playerController.postPlayer);
router.get('/player-info', playerController.getPlayer);
router.get('/player-info/:playerName', playerController.getfindPlayer);
router.put('/player-info/:playerId', playerController.updatePlayer);

module.exports = router;
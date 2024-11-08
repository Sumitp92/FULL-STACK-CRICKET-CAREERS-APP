const express = require('express');
const router = express.Router();
const player = require('../controllers/playerdata');

router.post('/player-info', player.postPlayer);
router.get('/player-info', player.getPlayer);
router.get('/player-info/:playerName', player.getfindPlayer);
router.delete('/player-info/:playerId', player.deletePlayer);
module.exports = router;

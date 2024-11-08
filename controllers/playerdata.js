const Player = require('../models/players');

exports.postPlayer = async (req, res, next) => {
  try {
    const player = await Player.create({
      ...req.body,
    });
    res.json({ newPlayerDetails: player });
  } catch (error) {
    res.status(500).send({ error: 'Server Error' });
  }
};

exports.getPlayer = async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send({ allPlayerDetails: players });
  } catch (error) {
    res.status(500).send({ error: 'Server Error' });
  }
};

exports.getfindPlayer = async (req, res, next) => {
  try {
    const name = req.params.playerName;
    const player = await Player.findOne({ where: { name: name } });
    return res.send({ playerDetails: player });
  } catch (error) {
    res.status(500).send({ error: 'Server Error' });
  }
};

exports.deletePlayer = async (req, res, next) => {
  try {
    const id = req.params.playerId;
    await Player.destroy({ where: { id: id } });
    res.send({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Server Error' });
  }
};

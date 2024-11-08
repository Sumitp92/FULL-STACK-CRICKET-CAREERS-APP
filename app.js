const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const playerRoutes = require('./routes/playerRoute');
const sequelize = require('./utils/database');

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the HTML file
});


app.use(playerRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on localhost:3000');
    });
  })
  .catch((err) => console.log(err));
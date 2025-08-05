const express = require('express');
const connectDB = require('./config/db');
const boxRoutes = require('./routes/boxes');//importing box routes
const cors = require('cors'); //importing cors library

const app = express(); //create an instance of express
const port = 3001;
app.use(cors()); //enable CORS for all routes
app.use(express.json());

connectDB();

app.use('/api/boxes', boxRoutes);

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});

//start the server with `node server/index.js`
// and visit http://localhost:3001/api/boxes to see the boxes API in action
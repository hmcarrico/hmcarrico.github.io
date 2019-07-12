const express = require('express');
const massive = require('massive');
const { getAllAliens, updateAlien } = require('./controllers/alienController');
require('dotenv').config();

const app = express();

app.use(express.json());

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('connected to the coolest db around')
})

app.get("/api/aliens", getAllAliens);
app.put('/api/aliens/:id', updateAlien)

app.listen(SERVER_PORT, () => console.log(`Chillin on port ${SERVER_PORT}`));
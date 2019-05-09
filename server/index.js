const express = require('express');
const app = express();
const chores_controller = require('./controllers/chore_controller.js')

app.use(express.json());


app.get('/api/chores', chores_controller.getAllChores);



const PORT = 8888;
app.listen(PORT, () => console.log(`Boom shaka laka on ${PORT}`));
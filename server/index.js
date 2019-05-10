const express = require('express');
const app = express();
const chores_controller = require('./controllers/chore_controller.js')

app.use(express.json());


app.get('/api/chores', chores_controller.getAllChores);
app.post('/api/addChore', chores_controller.addChore);
app.delete('/api/chore/:id', chores_controller.deleteChore);
app.put('/api/updateChore/:id', chores_controller.updateChore);



const PORT = 8888;
app.listen(PORT, () => console.log(`Boom shaka laka on ${PORT}`));
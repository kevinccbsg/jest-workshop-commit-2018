const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const notes = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/note', (req, res) => {
  const { title, description } = req.body;
  notes.push({
    id: notes.length,
    title,
    description,
  });
  res.json(notes);
});

app.listen(3001, () => console.log('Listening PORT 3001'))

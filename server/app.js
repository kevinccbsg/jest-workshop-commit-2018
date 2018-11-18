const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const notes = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/note', (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  notes.push({
    id: notes.length,
    title,
    description,
  });
  res.json(notes);
});

app.listen(3001, () => console.log('Listening PORT 3001'))

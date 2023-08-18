const express = require('express');
const cors = require('cors');
const DbService = require('./service');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/api/multiple-choice', async (req, res) => {
  console.log('inside /api/multiple-choice')
  try {
    const rows = await DbService.getAllMultipleChoice();
    res.json(rows);
    console.log(rows)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// get single multiple choice question by id on get
app.get('/api/multiple-choice/:id', async (req, res) => {
  console.log('inside /api/multiple-choice/:id')
  const id = req.params.id;
  try {
    const row = await DbService.getMultipleChoice(id);
    if (row === undefined) {
      res.sendStatus(404);
    } else {
      res.json(row);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

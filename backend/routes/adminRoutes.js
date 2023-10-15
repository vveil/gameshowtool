const express = require('express');
const router = express.Router();

const { addMultipleChoice } = require('../db/multipleChoice');

require('dotenv').config();
const config = process.env;

router.get('/', (req, res) => {
  res.send('Hello from adminRoutes.js');
});

router.post(
  '/question',
  /*verifyToken ,*/ (req, res) => {
    console.log('inside /question, req.body: ', req.body);
    const { question, answer, option1, option2, option3 } = req.body;
    console.log('question: ', question);
    console.log('answer: ', answer);
    console.log('option1: ', option1);
    console.log('option2: ', option2);
    console.log('option3: ', option3);

    addMultipleChoice(question, answer, option1, option2, option3)
      .then((result) => {
        console.log('result: ', result);
        res.status(200).json(result);
      })
      .catch((error) => {
        console.error('Error adding multiple choice question:', error);
        throw error;
      });
  }
);

module.exports = router;

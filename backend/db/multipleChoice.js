const db = require('./db');

async function addMultipleChoice(question, answer, option1, option2, option3) {
  const query =
    'INSERT INTO multiple_choice (question, answer, option_one, option_two, option_three) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [question, answer, option1, option2, option3];

  db.query(query, values)
    .then((result) => {
      console.log('result: ', result);
      return result.rows[0];
    })
    .catch((error) => {
      console.error('Error adding multiple choice question:', error);
      throw error;
    });
}

module.exports = {
  addMultipleChoice,
};

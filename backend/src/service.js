const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

class DbService {
  async getAllMultipleChoice() {
    const sql = 'SELECT * FROM multiple_choice';
    const result = await pool.query(sql);
    return result.rows;
  }

  async getMultipleChoice(id) {
    const sql = 'SELECT * FROM multiple_choice WHERE id = $1';
    const result = await pool.query(sql, [id]);
    return result.rows[0];
  }

  async createMultipleChoice(multipleChoice) {
    const sql =
      'INSERT INTO multiple_choice (question, correct_answer, option_one, option_two, option_three) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const result = await pool.query(sql, [
      multipleChoice.question,
      multipleChoice.answer,
      multipleChoice.optionOne,
      multipleChoice.optionTwo,
      multipleChoice.optionThree,
    ]);
    return result.rows[0];
  }

  async updateMultipleChoice(multipleChoice) {
    const sql =
      'UPDATE multiple_choice SET question = $1, correct_answer = $2, option_one = $3, option_two = $4, option_three = $5 WHERE id = $6 RETURNING *';
    const result = await pool.query(sql, [
      multipleChoice.question,
      multipleChoice.answer,
      multipleChoice.optionOne,
      multipleChoice.optionTwo,
      multipleChoice.optionThree,
      multipleChoice.id,
    ]);
    return result.rows[0];
  }

  async deleteMultipleChoice(id) {
    const sql = 'DELETE FROM multiple_choice WHERE id = $1';
    await pool.query(sql, [id]);
  }
}

module.exports = new DbService();

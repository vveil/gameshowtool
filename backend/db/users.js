const db = require('./db');

// Function to create a new user
async function createUser(username, password) {
  const query =
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
  const values = [username, password];

  db.query(query, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      throw error;
    });
}

// Function to get a user by username
async function getUser(username) {
  console.log('inside getUser, username: ', username);
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];

  const result = await db.query(query, values);
  console.log('result: ', result.rows[0]);
  return result.rows[0];
}

module.exports = {
  createUser,
  getUser,
};

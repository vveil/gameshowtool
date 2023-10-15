const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUser } = require('../db/users');
const db = require('../db/db');
// const { verifyToken } = require('./middleware');

// require('dotenv').config();
// const config = process.env;

// router.post('/signup', async (req, res) => {
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   const user = { username: req.body.username, password: hashedPassword };
//   await createUser(user.username, user.password);
//   res.status(201).send();
// });

router.post('/login', async (req, res) => {
  // const user = users.find((u) => u.username === req.body.username);
  const { username, password } = req.body;
  console.log('inside login, username: ', username);
  try {
    const user = await getUser(username);
    // check password
    if (await bcrypt.compare(password, user.password)) {
      console.log('password matches');
      const token = jwt.sign({ name: user.username }, 'your-secret-key', {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      console.log('password invalid');
      res.status(401).json({ error: 'Incorrect username or password' });
      return;
    }
  } catch (error) {
    console.log('error: ', error);
    res.status(401).json({ error: 'Incorrect username or password' });
    return;
  }
});

router.post('/validate', async (req, res) => {
  try {
    // Get token from request header
    const token = req.body.headers.Authorization.replace('Bearer ', '');

    // Validate token
    if (!token) {
      console.log('no token provided');
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await getUser(decoded.name);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User is valid', user: user.username });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;

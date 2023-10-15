const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const gameRoutes = require('./routes/gameRoutes');

require('dotenv').config();
const config = process.env;

const corsOptions = {
  // origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  // // origin: true,
  // credentials: true,
  // allowedHeaders: 'Content-Type,Authorization', // Allowed headers
};

const app = express();
app.use(express.json());

// app.use(bodyParser.json());
app.use(cors(corsOptions));
// app.use(cookieParser());

app.use('/auth', authRoutes);
// app.use('/admin', adminRoutes);
// app.use('/game', gameRoutes);

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});

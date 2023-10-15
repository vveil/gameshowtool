// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const config = process.env;

// function verifyToken(req, res, next) {
//   console.log('inside verifyToken, req.cookies: ', req.cookies);
//   const token = req.cookies.token; // Extract token from cookie
//   console.log('inside verifyToken, token: ', token);
//   if (!token) {
//     console.log('no token provided');
//     return res.status(403).json({ error: 'No token provided' });
//   }

//   jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       console.log('failed to authenticate token');
//       return res.status(401).json({ error: 'Failed to authenticate token' });
//     }
//     console.log('decoded: ', decoded);
//     req.user = decoded;
//     next();
//   });
// }

// module.exports = {
//   verifyToken,
// };

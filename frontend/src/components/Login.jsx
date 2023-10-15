import { useState } from 'react';
import axios from 'axios';
import './AuthComponent.css';

const AuthComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5050/auth/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('jwtToken', response.data.token);
      window.location.href = '/protected';
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
          required
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
          minLength="4"
        />
      </div>
      <button type="submit" className="submit-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default AuthComponent;

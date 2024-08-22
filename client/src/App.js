import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/protected" />;
  }

  return (
    <BrowserRouter>
      <Route path="/login">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <br />
          <button type="submit">Login</button>
        </form>
      </Route>
      <Route path="/protected">
        <h1>Protected Route</h1>
      </Route>
    </BrowserRouter>
  );
};

export default App;
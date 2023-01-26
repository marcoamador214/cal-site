
import React, { useState } from 'react';
import images from './constants/images';

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Invalid password');
      })
      .then((data) => {
        onLogin(data)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='login-form' style={{ paddingTop: '250px'}}>
      <img src={images.CalbearsFball} style={{ borderRadius: '50%', maxWidth: '95px', marginBottom: '10px'}}/>
      <br></br>
      <input
        type="text"
        id="username"
        placeholder='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        style={{ marginBottom: '15px'}}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={{ marginBottom: '15px'}}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit" className='login-button'>Login</button>
    </form>
  );
};

export default LoginForm;

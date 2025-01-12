import React, { useEffect, useState } from 'react';
import "../CSS/UserSignIn.css";
import { useNavigate } from 'react-router-dom';

function UserSignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  const gotosignup = () => {
    navigate('/signup');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setErrorMessage(null); // Reset error message before submission
    setLoading(true);

    const data = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/usersignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // If login is successful, store the token and user data
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        navigate('/');
      } else {
        // Show error message returned from the server
        setErrorMessage(result.error || 'Invalid username or password');
      }
    } catch (err) {
      setErrorMessage('An error occurred during sign-in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signbody">
      <div className="container">
        <h1 className="signinh1">Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" /> remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        {errorMessage && (
          <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
        )}
        <div className="buttontype">
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <p>
            Did you not have an account?{' '}
            <span
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={gotosignup}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSignIn;

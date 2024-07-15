// src/pages/createAccount.jsx
import React, { useState, useContext } from 'react';
import './CreateAccount.css';
import { AuthContext } from '../AuthContext';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password does not meet the requirements');
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('https://test-server.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        login();
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validatePassword = (password) => {
    const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRequirements.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-image">
        <img src="../src/images/Createaccount.svg" alt="highlighted" />
      </div>
      <div className="account">
        <h2>Create account</h2>
        <p>
        Welcome! enter your details and start creating, <br /> collecting and selling NFTs.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input className='account-input'
              placeholder='Username'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input className='account-input'
              placeholder='Email Address'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input className='account-input'
              placeholder='Password'
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div>
            <input className='account-input'
              placeholder='Confirm Password'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn-createaccount" type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

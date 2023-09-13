import React, { useState } from "react";
import './Password.css'; // Import the CSS file

const Password = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const len = /.{8,}/;
    const complexity = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()]).*$/;
    const common = /^(?!.*(.)\1{2})/;

    if (!len.test(password)) {
      setMessage("Provide 8 Characters");
    } else if (!complexity.test(password)) {
      setMessage('Password should include at least one uppercase and one lowercase letter, one digit, and one special character');
    } else if (!common.test(password)) {
      setMessage('Avoid repeating characters like 123...');
    } else {
      setMessage('Password is strong');
      const obj = {
        email,
        password
      };
      console.log(obj);
    }
  };

  return (
    <div className="password-container">
      <input
        type="text"
        name="email"
        id=""
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="message">{message}</p>
      <button className="login-button" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Password;

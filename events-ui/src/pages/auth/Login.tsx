import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion"
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/home'); // Redirect to home after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  if (login) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          variants={fadeUp}
          viewport={{ once: true }}
          initial="hidden"
          animate="visible"
          className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md"
        >

          <h1 className="font-heading text-3xl mb-6">Welcome Back</h1>

          <button
            onClick={() => {
              login({ id: "1", email: "user@events.com" });
              navigate("/dashboard");
            }}
            className="w-full bg-primary text-white py-3 rounded-full hover:bg-accent transition"
          >
            Continue
          </button>
        </motion.div>
      </main>
    )
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
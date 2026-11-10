
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@campusflow.com");
  const [password, setPassword] = useState("password123");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("Enter a valid email and a password of at least 6 characters.");
      return;
    }

    login(email);
    navigate("/");
  }

  return (
    <div className="auth-card">
      <h2>Welcome Back</h2>
      <p>Sign in to your account.</p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="primary-button">Sign In</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

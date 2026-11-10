
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim().length < 2 || !email.includes("@") || password.length < 6) {
      alert("Enter a name, valid email and password of at least 6 characters.");
      return;
    }

    login(email);
    navigate("/");
  }

  return (
    <div className="auth-card">
      <h2>Create Account</h2>
      <p>Register to use CampusFlow.</p>

      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

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

        <button className="primary-button">Register</button>
      </form>

      <p>Already registered? <Link to="/login">Login</Link></p>
    </div>
  );
}

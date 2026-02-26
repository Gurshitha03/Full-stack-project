import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Visitor");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "Admin") navigate("/admin");
    else if (role === "Artist") navigate("/artist");
    else if (role === "Curator") navigate("/curator");
    else navigate("/visitor");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to Virtual Art Gallery</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Visitor">Visitor</option>
              <option value="Artist">Artist</option>
              <option value="Curator">Curator</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </form>

        <p className="auth-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
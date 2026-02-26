import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Virtual Art Gallery</div>

      <div className="nav-links">
        <Link to="/paintings">Paintings</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/sculpture">Sculpture</Link>
        <Link to="/drawings">Drawings</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
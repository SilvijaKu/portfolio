import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar-section">
      <div className="navbar-box">
        <div className="logo">Silvija Kulvietytė</div>

        <div className="nav-links">
          <a href="#projects">Projektai</a>
          <a href="#about">Apie mane</a>
          <a href="#contact">Kontaktai</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
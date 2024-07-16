import { useState } from "react";
import { MenuIcon } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navBarLogo">
          <a href="/">
            <h2>Notas</h2>
          </a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <MenuIcon size="24px" />
        </div>
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <div className="hamburger-menu hamburger-menu-right" onClick={toggleMenu}>
            <MenuIcon size="30px" />
          </div>
          <a href="#">Inicio</a>
          <a href="#">Perfil</a>
          <a href="#">Cerrar Sesion</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

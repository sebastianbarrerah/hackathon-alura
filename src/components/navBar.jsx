import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Perfil from "./Perfil/Perfil";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleModal = () => {
    setModal(true);
  }
  
  return (
    <div className="navbarContainer">
      <Perfil modal={modal} setModal={setModal}/>
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
            <div
              className="hamburger-menu hamburger-menu-right"
              onClick={toggleMenu}
            >
              <MenuIcon size="30px" />
            </div>
            <a >Inicio</a>
            <a onClick={handleModal} style={{cursor: "pointer"}}>Perfil</a>
            <a>Cerrar Sesion</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

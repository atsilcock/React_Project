import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        
      >
        Home
      </NavLink>
      <NavLink
        to="/adoptnow"
        
       >
        AdoptNow
      </NavLink> 
      <NavLink
        to="/animalHistory"
        
      >
        AnimalHistory
      </NavLink>

    </nav>
    );
};

export default NavBar;
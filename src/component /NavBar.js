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
        to="/animalHistory"
        
      >
        Animal History
      </NavLink>
      
      <NavLink
        to="/adoptnow"
        
       >
        Adopt Now
      </NavLink> 
    

    </nav>
    );
};

export default NavBar;
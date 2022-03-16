// FIGURE OUT HOW TO IMPORT THE LOGO AND ICON

import { Link } from "react-router-dom";
import "./Header.css";
import logoBlack from "../assets/logos/logo-black.png";
import userIcon from "../assets/icons/user.svg";
import FavoritesIcon from "../assets/icons/favorites.svg";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/recipes/favorites">
        <i className="fa-solid fa-heart"></i>
      </Link>
      <Link to="/">
        <h1>
          <img className="black-logo" src={logoBlack} alt="Logo" width={450} />
        </h1>
      </Link>

      <i className="fa-solid fa-circle-user"></i>
    </header>
  );
};

export default Header;

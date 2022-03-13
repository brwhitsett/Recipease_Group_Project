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
        <img src={FavoritesIcon} alt="Favorites Icon" />
      </Link>
      <Link to="/">
        <h1>
          <img src={logoBlack} alt="Logo" width={450} />
        </h1>
      </Link>

      <img src={userIcon} alt="User Icon" />
    </header>
  );
};

export default Header;

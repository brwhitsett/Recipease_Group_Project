// FIGURE OUT HOW TO IMPORT THE LOGO AND ICON

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>
          <div>
            <img src={`assets/logos/logo-black.png`} alt="Logo" />;
          </div>
        </h1>
      </Link>
      <Link to="/recipes/favorites">
        <img src="/assets/icons/favorites.svg" alt="Favorites Icon" />
      </Link>
      <img src="/assets/icons/user.svg" alt="User Icon" />
    </header>
  );
};

export default Header;

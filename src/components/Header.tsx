import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoBlack from "../assets/logos/logo-black.png";
import userIcon from "../assets/icons/user.svg";
import FavoritesIcon from "../assets/icons/favorites.svg";
import logoWhite from "../assets/logos/logo-white.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header
      className="Header"
      style={{
        background:
          path === "/" || path === "/recipes/complexSearch" ? "white" : "black",
      }}
    >
      <div className="logo-and-icon-container">
        <Link to="/recipes/favorites" className="heart">
          <i
            className={`fa-solid fa-heart${
              path !== "/" && path !== "/recipes/complexSearch" ? " dark" : ""
            }`}
          ></i>
        </Link>

        <Link to="/" className="logo">
          <h1>
            <img
              src={
                path === "/" || path === "/recipes/complexSearch"
                  ? logoBlack
                  : logoWhite
              }
              className="black-logo"
              alt="Logo"
              width={450}
            />
          </h1>
        </Link>

        <i
          className={`fa-solid fa-circle-user${
            path !== "/" && path !== "/recipes/complexSearch" ? " dark" : ""
          }`}
          style={{ color: useLocation().pathname !== "/" ? "white" : "black" }}
        ></i>
      </div>
    </header>
  );
};

export default Header;

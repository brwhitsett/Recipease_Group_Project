import "./Footer.css";
import logoIconBlack from "../assets/logos/logo-icon-black.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import pinterest from "../assets/icons/pinterest.svg";
import { useLocation } from "react-router-dom";
import logoWhiteIcon from "../assets/logos/logo-icon-white.png";

const Footer = () => {
  return (
    <footer
      className="Footer"
      style={{ background: useLocation().pathname !== "/" ? "black" : "white" }}
    >
      <img
        className="logo-icon"
        src={useLocation().pathname !== "/" ? logoWhiteIcon : logoIconBlack}
        alt="Black Icon Logo"
        width={100}
      />
      <p
        className="copyright"
        style={{ color: useLocation().pathname !== "/" ? "white" : "black" }}
      >
        Recipease ©️ Copyright 2022 All Rights Reserved
      </p>
      <div className="social-media-container">
        <nav>
          <ul>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-facebook-f"
                  style={{
                    color: useLocation().pathname !== "/" ? "white" : "black",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-instagram"
                  style={{
                    color: useLocation().pathname !== "/" ? "white" : "black",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-pinterest-p"
                  style={{
                    color: useLocation().pathname !== "/" ? "white" : "black",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

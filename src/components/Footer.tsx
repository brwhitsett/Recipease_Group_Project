import "./Footer.css";
import logoIconBlack from "../assets/logos/logo-icon-black.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import pinterest from "../assets/icons/pinterest.svg";
import { useLocation } from "react-router-dom";
import logoWhiteIcon from "../assets/logos/logo-icon-white.png";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <footer
      className="Footer"
      style={{
        background:
          path === "/" || path === "/recipes/complexSearch" ? "white" : "black",
      }}
    >
      <img
        className="logo-icon"
        src={
          path === "/" || path === "/recipes/complexSearch"
            ? logoIconBlack
            : logoWhiteIcon
        }
        alt="Black Icon Logo"
        width={100}
      />
      <p
        className="copyright"
        style={{
          color:
            path === "/" || path === "/recipes/complexSearch"
              ? "black"
              : "white",
        }}
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
                    color:
                      path === "/" || path === "/recipes/complexSearch"
                        ? "black"
                        : "white",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-instagram"
                  style={{
                    color:
                      path === "/" || path === "/recipes/complexSearch"
                        ? "black"
                        : "white",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa-brands fa-pinterest-p"
                  style={{
                    color:
                      path === "/" || path === "/recipes/complexSearch"
                        ? "black"
                        : "white",
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

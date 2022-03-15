import "./Footer.css";
import logoIconBlack from "../assets/logos/logo-icon-black.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import pinterest from "../assets/icons/pinterest.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <img
        className="logo-icon"
        src={logoIconBlack}
        alt="Black Icon Logo"
        width={100}
      />
      <p className="copyright">
        Recipease ©️ Copyright 2022 All Rights Reserved
      </p>
      <div className="social-media-container">
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  className="social-media-img"
                  src={facebook}
                  alt="facebook icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="social-media-img"
                  src={instagram}
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="social-media-img"
                  src={pinterest}
                  alt="pinterest icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import "./Footer.css";
import logoIconBlack from "../assets/logos/logo-icon-black.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import pinterest from "../assets/icons/pinterest.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <img src={logoIconBlack} alt="Black Icon Logo" width={100} />
      <p>Recipease ©️ Copyright 2022 All Rights Reserved</p>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={facebook} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterest} alt="pinterest icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

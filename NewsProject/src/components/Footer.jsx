import "../styles/footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <h2>Copyright © omarmovlamov </h2>
        <div className="socials">
          <a href="#">
            <AiFillFacebook id="facebook" />
          </a>
          <a href="#">
            <AiFillInstagram id="instagram" />
          </a>
          <a href="#">
            <AiFillTwitterCircle id="twitter" />
          </a>
          <a href="#">
            <AiFillLinkedin id="linkedin" />
          </a>
        </div>
      </div>
      <div>
        <div className="resource column">
          <h3>Resource</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">License Agreement</a>
            </li>
          </ul>
        </div>
        <div className="pricing column">
          <h3>Pricing</h3>
          <ul>
            <li>
              <a href="#">Premium News</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Promotions</a>
            </li>
          </ul>
        </div>
        <div className="company column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>
        <div className="social column">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

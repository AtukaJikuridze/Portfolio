import "./Footer.css";
import logo from "../../images/icons/Logo.png";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="footer-border">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-leftside">
              <div className="my-gmail">
                <img src={logo} alt="" />
                <p>avtojikuridze@gmail.com</p>
              </div>
              <h4>Web designer and front-end developer</h4>
            </div>
            <div className="footer-rightside">
              <h3>Media</h3>
              <div className="media-flex">
                <a
                  href="https://www.instagram.com/jikuridzeatuka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram />
                </a>

                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/avto-jikuridze-a4167b26b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://github.com/AtukaJikuridze"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="footer-bottomside">© Copyright 2022. Made by Elias</p>
        </div>
      </div>
    </footer>
  );
}

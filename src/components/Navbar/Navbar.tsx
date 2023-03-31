import logo from "../../images/icons/Logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import "./Navbar.css";
import { NavLinkAPI } from "../../API/NavLinkAPI";
import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState<number>(0);
  return (
    <nav>
      <div className="nav-leftside-contacts">
        <div className="line"></div>
        <div className="social">
          <a
            href="https://www.instagram.com/jikuridzeatuka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </div>
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
      <div className="navbar-container container">
        <img src={logo} alt="" />
        <ul>
          {NavLinkAPI.map((e, i) => (
            <li>
              <Link
                onClick={() => setActive(i)}
                className={active === i ? "navlink-active" : ""}
                to={e.navigateTo}
              >
                <span>#</span>
                <p>{e.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

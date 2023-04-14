import logo from "../../images/icons/Logo.png";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
        <img onClick={() => navigate("/Home")} src={logo} alt="" />
        <ul>
          {NavLinkAPI.map((e, i) => (
            <li key={i}>
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

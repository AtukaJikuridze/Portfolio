import logo from "../../images/icons/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import "./Navbar.css";
import { NavLinkAPI } from "../../API/NavLinkAPI";
import { useEffect, useState } from "react";
export default function Navbar() {
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  const [active, setActive] = useState<string | null>(null);
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
        <img onClick={() => navigate("Portfolio/")} src={logo} alt="" />
        <ul>
          {NavLinkAPI.map((e, i) => (
            <li key={i}>
              <Link
                onClick={() => setActive(e.navigateTo)}
                className={
                  active?.slice(1) === e.navigateTo ? "navlink-active" : ""
                }
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

import "./Header.css";
import mypic1 from "../../../images/MyPictures/Pic1.png";
import { useNavigate } from "react-router";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <div className="header-leftside">
            <h1>
              I am <span>front-end web developer</span>
            </h1>
            <p>
              i craft responsive websites where technologies meet creativity
            </p>
            <button onClick={() => navigate("/Portfolio/Contact")}>Contact Me</button>
          </div>
          <div className="header-rightside">
            <div className="my-image">
              <img src={mypic1} alt="" />
              <div className="image-bottomside">
                <div className="cube"></div>
                <p>
                  Currently working on <span>Portfolio</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

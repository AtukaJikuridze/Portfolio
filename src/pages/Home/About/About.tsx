import "./About.css";
import MyImg from "../../../images/MyPictures/Pic2.png";
import { SectionTitle } from "../../../components/SectionTitle";
import { useNavigate } from "react-router";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="container">
        <SectionTitle title="About me" />

        <div className="about-flex">
          <div className="about-info">
            <p>Hello, i’m Avto!</p>
            <p>
              I’m a self-taught front-end developer based in Tbilisi, Georgia. I
              can develop responsive websites
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              s my passion for over a year. I always strive to learn about the
              newest technologies and frameworks.
            </p>
            <button onClick={() => navigate("/Portfolio/Contact")}>
              Read more {"->"}
            </button>
          </div>
          <div className="about-image">
            <img src={MyImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

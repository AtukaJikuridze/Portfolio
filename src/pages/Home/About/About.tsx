import "./About.css";
import MyImg from "../../../images/MyPictures/Pic2.png";
import { SectionTitle } from "../../../components/SectionTitle";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <SectionTitle title="About me" />

        <div className="about-flex">
          <div className="about-info">
            <p>Hello, i’m Elias!</p>
            <p>
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              s my passion for over a year. I have been helping various clients
              to etablish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <button>Read more {"->"}</button>
          </div>
          <div className="about-image">
            <img src={MyImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

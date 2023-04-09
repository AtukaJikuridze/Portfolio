import { AiFillAccountBook, AiOutlineFacebook } from "react-icons/ai";
import ContactBox from "../../components/ContactBox/ContactBox";
import "./Contact.css";
import AllMedia from "./AllMedia";
export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>
          <span>/</span>contacts
        </h2>
        <p className="header-p">who am i ?</p>

        <div className="my-info">
          <p className="my-info-p">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <ContactBox />
        </div>
        <h2>
          <span>/</span>all-media
        </h2>
        <AllMedia />
      </div>
    </div>
  );
}

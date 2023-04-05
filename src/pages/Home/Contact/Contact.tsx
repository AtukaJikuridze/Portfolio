import { SectionTitle } from "../../../components/SectionTitle";
import "./Contact.css";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <SectionTitle title="contact" />
        <div className="contact-flex">
          <p className="leftside-p">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="contact-info">
            <h4>Message me here</h4>
            <div className="flex-contact-info">
              <AiOutlineMail />
              <p>avtojikuridze@gmail.com</p>
            </div>
            <div className="flex-contact-info">
              <AiOutlineInstagram />
              <p>jikuridzeatuka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import ContactBox from "../../../components/ContactBox/ContactBox";
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
          <ContactBox />
        </div>
      </div>
    </div>
  );
}

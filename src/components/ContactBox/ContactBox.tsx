import "./ContactBox.css";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

export default function ContactBox() {
  return (
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
  );
}

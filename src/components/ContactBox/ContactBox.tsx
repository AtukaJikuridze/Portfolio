import "./ContactBox.css";
import {  AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function ContactBox() {
  return (
    <div className="contact-info">
      <h4>Message me here</h4>
      <div className="flex-contact-info">
        <AiOutlineMail />
        <p>avtojikuridze@gmail.com</p>
      </div>
      <div className="flex-contact-info">
        <AiOutlineLinkedin  />
        <p>Avto Jikuridze</p>
      </div>
    </div>
  );
}

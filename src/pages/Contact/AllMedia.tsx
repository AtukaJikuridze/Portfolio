import { AllMediaAPI } from "../../API/AllMediaAPI";
import "./Contact.css";
export default function AllMedia() {
  return (
    <div className="all-media">
      {AllMediaAPI.map((e) => (
        <div className="media-main">
          <div className="media">
            <p>{e.title}</p>
            <e.icon />
            <p className="media-arrow">{"~~>"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

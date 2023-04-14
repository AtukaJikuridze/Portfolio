import { AllMediaAPI } from "../../API/AllMediaAPI";
import "./Contact.css";
export default function AllMedia() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="all-media">
      {AllMediaAPI.map((e) => (
        <div className="media-main">
          <div onClick={() => openInNewTab(e.link)} className="media">
            <p>{e.title}</p>
            <e.icon />
            <p className="media-arrow">{"~~>"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

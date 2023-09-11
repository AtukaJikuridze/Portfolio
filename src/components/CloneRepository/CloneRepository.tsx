import CloneOptions from "./CloneOptions/CloneOptions";
import { AiOutlineClose } from "react-icons/ai";
import "./CloneRepository.css";
interface cloneRep {
  isOpen: boolean;
  setIsOpen: Function;
  https: string;
  ssh: string;
  cli: string;
}
export default function CloneRepository({
  isOpen,
  setIsOpen,
  https,
  ssh,
  cli,
}: cloneRep) {
  return (
    <div className={`clone-repository-main ${isOpen ? "" : "closed-box"}`}>
      <div className="clone-repository-box">
        <div className="close-button" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineClose />
        </div>
        <div className="clone-repository-content">
          <div className="header-text">
            <h2>FurniroShop</h2>
            <p>Clone a repository</p>
          </div>
          <CloneOptions https={https} ssh={ssh} cli={cli} />
        </div>
      </div>
    </div>
  );
}

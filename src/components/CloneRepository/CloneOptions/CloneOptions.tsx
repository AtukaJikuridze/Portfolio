import { FaRegClone } from "react-icons/fa";
import "./CloneOptions.css";
interface cloneOptionsInterface {
  https: string;
  ssh: string;
  cli: string;
}
export default function CloneOptions({
  https,
  ssh,
  cli,
}: cloneOptionsInterface) {
  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="clone-options">
      <div className="options">
        <div className="option">
          <h3>HTTPS:</h3>
          <div className="option-link">
            <p>{https}</p>
            <FaRegClone
              onClick={() =>
                copyContent("https://github.com/AtukaJikuridze/FurniroShop.git")
              }
            />
          </div>
        </div>

        <div className="option">
          <h3>SSH:</h3>
          <div className="option-link">
            <p>{ssh}</p>
            <FaRegClone
              onClick={() =>
                copyContent("git@github.com:AtukaJikuridze/FurniroShop.git")
              }
            />
          </div>
        </div>

        <div className="option">
          <h3>GitHub CLI:</h3>
          <div className="option-link">
            <p>{cli}</p>
            <FaRegClone
              onClick={() =>
                copyContent("gh repo clone AtukaJikuridze/FurniroShop")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

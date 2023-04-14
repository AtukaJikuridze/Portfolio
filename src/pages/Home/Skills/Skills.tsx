import { SkillsAPI } from "../../../API/SkillsAPI";
import { SectionTitle } from "../../../components/SectionTitle";
import skillsBG from "../../../images/icons/SkillsBG.png";
import Skill from "./Skill";
import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <SectionTitle title="skills" />
        <div className="skills-flex">
          <div className="skills-leftside">
            <img src={skillsBG} alt="" />
          </div>
          <div className="skills-rightside">
            {SkillsAPI.map((e) => (
              <Skill key={Math.random()} title={e.title} list={e.list} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import "./Project.css";
export default function Project() {
  return (
    <div className="project">
      <img
        src="https://hbomax-images.warnermediacdn.com/images/GYGQHcghdiIjDXAEAAAHA/tileburnedin?size=1280x720&partner=hbomaxcom&v=3c2fac40133a551c820086f82bd1866d&host=art-gallery.api.hbo.com&language=en-us&w=1280"
        alt=""
      />
      <div className="made-with">
        <p>HTML</p>
        <p>SCSS</p>
        <p>Python</p>
        <p>Flask</p>
      </div>
      <div className="project-info">
        <h3>ChertNodes</h3>
        <p>Minecraft servers hosting </p>
        <div className="project-buttons">
          <button>Live {"<~>"}</button>
          <button>Github {">="}</button>
        </div>
      </div>
    </div>
  );
}

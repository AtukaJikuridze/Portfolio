export function SectionTitle(props: { title: string }) {
  return (
    <div className="section-title">
      <span>#</span>
      <h3>{props.title}</h3>
      <div className="section-title-dash"></div>
    </div>
  );
}

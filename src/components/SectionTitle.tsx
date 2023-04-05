export const SectionTitle = (props: { title: string }) => {
  return (
    <h3>
      <span>#</span>
      {props.title} <span>---------------------</span>
    </h3>
  );
};

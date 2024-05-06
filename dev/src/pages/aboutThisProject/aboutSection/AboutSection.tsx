type TProps = {
  header: string;
  content: string;
  lastUpdateDate: number;
};

const AboutSection = ({ header, content, lastUpdateDate }: TProps) => {
  const formattedDate = new Date(lastUpdateDate).toLocaleDateString();

  return (
    <section>
      <h3>{header}</h3>
      <p>{content}</p>
      <footer className="d-flex justify-content-end">
        last update {formattedDate}
      </footer>
    </section>
  );
};

export default AboutSection;

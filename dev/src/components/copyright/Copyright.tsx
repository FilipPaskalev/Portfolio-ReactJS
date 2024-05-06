import { CCircle } from "react-bootstrap-icons";

type TProps = {
  name: string;
  year: number;
};

const Copyright = ({ name, year }: TProps) => {
  return (
    <footer className="d-flex justify-content-center mt-5 mb-1">
      <p className="text-muted">
        Copyright <CCircle /> {year} {name}
      </p>
    </footer>
  );
};

export default Copyright;

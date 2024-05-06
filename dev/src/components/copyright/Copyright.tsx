import { CCircle } from "react-bootstrap-icons";

type TProps = {
  name: string;
  year: number;
};

const Copyright = ({ name, year }: TProps) => {
  return (
    <p className="text-muted">
      Copyright <CCircle /> {year} {name}
    </p>
  );
};

export default Copyright;

import { Button } from "react-bootstrap";
import "./style.css";

const BtnV1 = ({ label, onClick, variant = "dark" }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className="rounded-pill btnV1 border-0 text-semibold"
    >
      {label}
    </Button>
  );
};

export default BtnV1;

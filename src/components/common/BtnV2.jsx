import { arrow } from "../../assets/icons";
import "./style.css";

const BtnV2 = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-pill btnV2 border-0 fw-bold d-flex justify-content-center align-items-center gap-1 bg-custom-primary mt-3 mt-md-4"
    >
      {label}
      <div>
        <img src={arrow} alt="arrow" className="arrow"/>
      </div>
    </button>
  );
};

export default BtnV2;

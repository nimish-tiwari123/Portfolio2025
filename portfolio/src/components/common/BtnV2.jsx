import { arrow } from "../../assets/icons";
import "./style.css";

const BtnV2 = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-pill btnV2 border-0 fw-medium d-flex justify-content-center align-items-center gap-2 fs-5 bg-custom-primary mt-5"
    >
      {label}
      <div className="rounded-circle bg-white p-1">
        <img src={arrow} alt="arrow" className="arrow"/>
      </div>
    </button>
  );
};

export default BtnV2;

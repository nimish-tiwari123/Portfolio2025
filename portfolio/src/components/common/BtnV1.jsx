import "./style.css";

const BtnV1 = ({ label, pad, onClick, variant = "dark" }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-pill btnV1 border-0 fw-medium ${variant} ${pad}`}
    >
      {label}
    </button>
  );
};

export default BtnV1;

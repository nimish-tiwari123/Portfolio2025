import "./style.css";

const BtnV1 = ({ label, onClick, variant = "dark" }) => {
  return (
    <button
      variant={variant}
      onClick={onClick}
      className="rounded-pill btnV1 border-0 fw-medium"
    >
      {label}
    </button>
  );
};

export default BtnV1;

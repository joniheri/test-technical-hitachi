import React from "react";
import { useNavigate } from "react-router-dom";

export default function Test3() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="d-flex" style={{ alignItems: "center" }}>
        <img
          src="/assets/images/icons/icons8-back-100-black.png"
          alt="back"
          title="back"
          className="me-3"
          style={{
            height: "30px",
            width: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        />
        <h3 style={{ marginTop: "5px" }}>Test3</h3>
      </div>
    </div>
  );
}

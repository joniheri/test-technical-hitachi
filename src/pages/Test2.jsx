import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dataSoal } from "../data/Soal";

export default function Test2() {
  const navigate = useNavigate();
  const params = useParams();

  const [soal, setSoal] = useState([]);

  useEffect(() => {
    detailTest();
  }, []);

  const detailTest = () => {
    const idSoal = params.id;
    const response = dataSoal.find((item) => item.id === idSoal);
    console.log(response);
    setSoal(response);
  };

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
        <h3 style={{ marginTop: "5px" }}>Test {soal.id}</h3>
      </div>

      {/* Soal */}
      <div className="mt-4">
        <h5>Soal</h5>
        {typeof soal === "object" && soal !== null && (
          <textarea
            readOnly
            rows="6"
            className="form-control"
            value={soal.descriptionSoal}
            style={{
              textAlign: "justify",
            }}
          ></textarea>
        )}
      </div>
      <hr />
      {/* End Soal */}

      <div className="mt-5">
        <h5>Demo Hasil</h5>
      </div>
      <hr />
    </div>
  );
}

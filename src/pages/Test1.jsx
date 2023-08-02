import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dataSoal } from "../data/Soal";

export default function Test1() {
  const navigate = useNavigate();
  const params = useParams();

  const [soal, setSoal] = useState([]);
  const [input, setInput] = useState("");
  const [maxPairingSum, setMaxPairingSum] = useState(0);

  useEffect(() => {
    detailTest();
  }, []);

  const detailTest = () => {
    const idSoal = params.id;
    const response = dataSoal.find((item) => item.id === idSoal);
    console.log(response);
    setSoal(response);
  };

  const findMaxPairingSum = (array) => {
    const sortedArray = array.slice().sort((a, b) => a - b);
    let maxPairingSum = 0;
    for (let i = 0; i < sortedArray.length; i += 2) {
      maxPairingSum += sortedArray[i];
    }
    return maxPairingSum;
  };

  const handleCalculate = () => {
    const inputArray = input.split(",").map((num) => parseInt(num.trim(), 10));
    const result = findMaxPairingSum(inputArray);
    setMaxPairingSum(result);
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
        <h3 style={{ marginTop: "6px" }}>Test {soal.id}</h3>
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
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Input Angka dg pembatas koma ','"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                className="input-group-text btn btn-secondary"
                onClick={handleCalculate}
              >
                Hitung
              </button>
            </div>
          </div>
          <h5>Output: {maxPairingSum}</h5>
        </div>
      </div>
      <hr />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dataSoal } from "../data/Soal";

export default function Test3() {
  const navigate = useNavigate();
  const params = useParams();

  const [soal, setSoal] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const digitToLetters = {
    0: " ",
    1: " ",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  useEffect(() => {
    detailTest();
    setResult([]);
    findAllCombinations();
  }, [input]);

  const detailTest = () => {
    const idSoal = params.id;
    const response = dataSoal.find((item) => item.id === idSoal);
    console.log(response);
    setSoal(response);
  };

  const findAllCombinations = (currentIndex = 0, currentCombination = "") => {
    if (currentIndex === input.length) {
      setResult((prevResult) => [...prevResult, currentCombination]);
      return;
    }

    const currentDigit = input[currentIndex];
    const letters = digitToLetters[currentDigit];

    if (!letters) {
      findAllCombinations(currentIndex + 1, currentCombination);
      return;
    }

    for (const letter of letters) {
      findAllCombinations(currentIndex + 1, currentCombination + letter);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
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
            <input
              type="text"
              className="form-control"
              placeholder="Input Angka..."
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <h5>Output: </h5>
          <div style={{ overflowX: "scroll" }}>
            <h5>{JSON.stringify(result)}</h5>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

import { dataSoal } from "../data/Soal";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Soal & Jawaban Test Technical</h3>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dataSoal &&
          dataSoal.map((item, index) => {
            return (
              <div key={index} className="col">
                <div
                  className="card h-100 shadow"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(item.patchUrl + `/${item.id}`);
                  }}
                >
                  <div className="card-body">
                    <div style={{ textAlign: "center" }}>
                      <h4 className="card-title">Test {item.id}</h4>
                      <p className="card-title">{item.title}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span
                      className="text-success"
                      style={{ fontStyle: "italic" }}
                    >
                      Hasil Klik disini
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

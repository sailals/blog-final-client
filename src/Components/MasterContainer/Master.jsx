import React from "react";
import "./master.css";

function Master({ record }) {
  return (
    <>
      <div className="master">
        <div className="row">
          <div className="col-md-3">
            <img src={record.src} alt="" />
          </div>
          <div className="col-md-9 desc">
            <div className="img-container">
              <img className="text-end" src={record.logo} alt="" />
            </div>
            <h4 className="text-end">{record.title}</h4>
            <p className="text-end">{record.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Master;

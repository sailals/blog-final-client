import React from "react";
import "./header.css";
// import '../../Images/head'

function Header() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-12 ">
            <span className="small">Entertainment</span>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-md-12 ms-5 ">
            <span className="big text-center ms-4">Blog & News</span>
            <img
              style={{ height: "150px", width: "150px" }}
              src="../../Images/pencil.gif"
              alt=""
            />
          </div>
        </div>
        <div className="imgContainer">
          <img src="../../Images/head.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./back.css";

function BackgroundAttachment({ title }) {
  return (
    <>
      <div className="imgcontainer mt-5">
        <div className="overlays">
          <div className="texts">
            <h3 className="display-3">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundAttachment;

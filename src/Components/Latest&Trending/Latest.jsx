import React, { useState } from "react";
import "./latest.css";
// import data from "./trending";
import Master from "../MasterContainer/Master";
import YouTube from "react-youtube";

function Latest({ data }) {
  const [display, setDisplay] = useState(false);

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [value, setValue] = useState({
    desc: "",
    src: "",
    id: "",
    title: "",
    logo: "",
    videoid: "",
  });
  const handleClick = (value) => {
    setValue({
      desc: value.desc,
      src: value.src,
      id: value.id,
      title: value.title,
      logo: value.logo,
      videoid: value.videoid,
    });
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  console.log(value);
  return (
    <>
      <div className="rowPosters">
        {data.map((value, key) => {
          return (
            <>
              <img
                onClick={() => handleClick(value)}
                key={key}
                desc={value.desc}
                className="rowPoster"
                src={value.src}
                alt=""
              />
            </>
          );
        })}
      </div>
      {display && <Master record={value} />}
      {display && <YouTube videoId={value.videoid} opts={opts} />}
    </>
  );
}

export default Latest;

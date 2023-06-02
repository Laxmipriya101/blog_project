import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "../../App.css";
export const TechArt = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Technology/${d.id}`, { state: d });
  }

  return (
    <div>
      <div className="techHead"> Technology </div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "Technology" && item.for === "TechArt")
        .map((d, index) => (
          <div key={index}>
            {/* <div>{d.title}</div> */}
            <img
              onClick={() => handleImg(d)}
              src={d.img}
              alt="no photo"
              className="techImg"
            />
          </div>
        ))}
    </div>
  );
};

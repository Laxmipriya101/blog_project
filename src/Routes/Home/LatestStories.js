import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const LatestStories = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Home/${d.id}`, { state: d });
  }

  return (
    <div className="latestStorypar">
      <div> {data.cat} </div>
      <div className="latestStoryimg">
        {data
          .filter((item) => item.cat === "Home" && item.for === "Banner")
          .map((d, index) => (
            <img
              onClick={() => handleImg(d)}
              src={d.img}
              key={index}
              alt="no photo"
              className="fisrtImagess"
            />
          ))}
      </div>
    </div>
  );
};

export default LatestStories;

import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const Banner = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Home/${d.id}`, { state: d });
  }

  return (
    <div className="mainImg">
      <div> {data.cat} </div>
      <div className="bannerImg">
        {data
          .filter((item) => item.cat === "Home" && item.for === "Banner")
          .map((d, index) => (
            <img
              onClick={() => handleImg(d)}
              src={d.img}
              key={index}
              alt="no photo"
              className="firstImage "
            />
          ))}

        {data
          .filter((item) => item.cat === "Home" && item.for === "Banner1")
          .map((d, index) => (
            <img
              onClick={() => handleImg(d)}
              src={d.img}
              key={index}
              alt="no photo"
              className="SecondImage "
            />
          ))}
      </div>
    </div>
  );
};

export default Banner;

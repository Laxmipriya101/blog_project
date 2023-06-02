import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./bollywood.style.css";

export const TopPost = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Bollywood/${d.id}`, { state: d });
  }

  return (
    <div className="ArticleList">
      <div className="ArticleListHead"> TopPost</div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "TopPost" && item.for === "ArticleList")
        .map((d, index) => (
          <div key={index}>
            {/* <div>{d.title}</div> */}
            <img
              className="hov"
              onClick={() => handleImg(d)}
              src={d.img}
              alt="no photo"
            />
          </div>
        ))}
    </div>
  );
};

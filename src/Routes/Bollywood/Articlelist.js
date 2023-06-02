import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./bollywood.style.css";

export const Articlelist = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Bollywood/${d.id}`, { state: d });
  }

  return (
    <div className="ArticleList">
      <div className="ArticleListHead"> Bollywood </div>
      <div className="mainbolly">
        <div className="bolly">
          {data
            .filter(
              (item) => item.cat === "Hollywood" && item.for === "ArticleList"
            )
            .map((d, index) => (
              <div key={index}>
                <img
                  className="hov"
                  onClick={() => handleImg(d)}
                  src={d.img}
                  alt="no photo"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

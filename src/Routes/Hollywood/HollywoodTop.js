import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";

export const HollywoodTop = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Technology/${d.id}`, { state: d });
  }

  return (
    <div className="TopPost">
      <div className="ArticleListHead"> TopPost</div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "TechTop" && item.for === "HollywoodTop")
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

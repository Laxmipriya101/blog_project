import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "../../App.css";
export const FoodArticle = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Food/${d.id}`, { state: d });
  }

  return (
    <div>
      <div className="HeadFood"> Food </div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "Food" && item.for === "FoodArticle")
        .map((d, index) => (
          <div key={index}>
            {/* <div>{d.title}</div> */}
            <img
              onClick={() => handleImg(d)}
              src={d.img}
              alt="no photo"
              className="fooImg"
            />
          </div>
        ))}
    </div>
  );
};

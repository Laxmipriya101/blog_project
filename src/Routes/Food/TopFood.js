import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const TopFood = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Food/${d.id}`, { state: d });
  }

  return (
    <div>
      <div className="ArticleListHead"> TopPost</div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "Food" && item.for === "TopFood")
        .map((d, index) => (
          <div key={index}>
            {/* <div>{d.title}</div> */}
            <img
              className="FoodTopimg"
              onClick={() => handleImg(d)}
              src={d.img}
              alt="no photo"
            />
          </div>
        ))}
    </div>
  );
};

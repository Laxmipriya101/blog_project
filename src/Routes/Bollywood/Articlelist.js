import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";

export const Articlelist = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Bollywood/${d.id}`, { state: d });
  }

  return (
    <div>
      <div> Articlelist </div>
      <div> {data.cat} </div>
      {data
        .filter(
          (item) => item.cat === "Hollywood" && item.for === "ArticleList"
        )
        .map((d, index) => (
          <div key={index}>
            <div>{d.title}</div>
            <img onClick={() => handleImg(d)} src={d.img} alt="no photo" />
          </div>
        ))}
    </div>
  );
};

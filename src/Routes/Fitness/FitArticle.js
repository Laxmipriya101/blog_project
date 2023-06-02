import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const FitArticle = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Fitness/${d.id}`, { state: d });
  }

  return (
    // <div>
    //   <div> Food </div>
    //   <div> {data.cat} </div>
    //   {data
    //     .filter((item) => item.cat === "Fitness" && item.for === "FitArticle")
    //     .map((d, index) => (
    //       <div key={index}>
    //         <div>{d.title}</div>
    //         <img
    //           onClick={() => handleImg(d)}
    //           src={d.img}
    //           alt="no photo"
    //           className="fooImg"
    //         />
    //       </div>
    //     ))}
    // </div>

    <div>
      <div className="techHead"> Fitness</div>
      <div> {data.cat} </div>
      {data
        .filter((item) => item.cat === "Fitness" && item.for === "FitArticle")
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

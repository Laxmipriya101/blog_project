import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const Latest = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Home/${d.id}`, { state: d });
  }

  return (
    <>
      <h1 className="lateHead">The Latest</h1>
      <br />
      <br />
      <br />

      <div className="mainImg">
        <div> {data.cat} </div>
        <div className="LatestImg">
          {/* {data
            .filter((item) => item.cat === "Home" && item.for === "Latest")
            .map((d, index) => (
              <img
                onClick={() => handleImg(d)}
                src={d.img}
                key={index}
                alt="no photo"
                className="latest1"
              />
            ))} */}

          {data
            .filter((item) => item.cat === "Home" && item.for === "Latest")
            .map((d, index) => (
              <div key={index}>
                <img
                  className="hov"
                  onClick={() => handleImg(d)}
                  src={d.img}
                  alt="no photo"
                />
                <div>{d.title}</div>
                <div>{d.Overview}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Latest;

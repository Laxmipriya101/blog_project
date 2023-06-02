import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const HomeTop = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Home/${d.id}`, { state: d });
  }

  return (
    <>
      <br />
      <br />
      <div className="Hometoppar">
        <div> {data.cat} </div>
        <div className="homeToppost">
          <h1 className="late">TopPost</h1>
          {data
            .filter((item) => item.cat === "Home" && item.for === "HomeTop")
            .map((d, index) => (
              <div key={index}>
                <img
                  className="homeTopsmallimg"
                  onClick={() => handleImg(d)}
                  src={d.img}
                  alt="no photo"
                />

                <div>{d.title}</div>
                <br />
                <div>{d.date}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomeTop;

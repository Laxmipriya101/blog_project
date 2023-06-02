import React, { useContext } from "react";
import { ContexStore } from "../../Utility/ContextStore/ContextAPI";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const LatestArticle = () => {
  const [data] = useContext(ContexStore);
  console.log(data);
  const Navi = useNavigate();
  function handleImg(d) {
    Navi(`/Home/${d.id}`, { state: d });
  }

  return (
    <>
      <div className="latestArticlePar">
        <h1 className="late">The LatestArticle</h1>
        <div>
          {data
            .filter(
              (item) => item.cat === "Home" && item.for === "LatestArticle "
            )
            .map((d, index) => (
              <div key={index} className="latestArticleContainer">
                <div>
                  <img
                    className="hov"
                    onClick={() => handleImg(d)}
                    src={d.img}
                    alt="no photo"
                  />
                </div>
                <div className="LAtextConterinr">
                  <div>{d.title}</div>
                  <div>{d.Overview}</div>

                  <br />
                  <div>{d.date}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LatestArticle;

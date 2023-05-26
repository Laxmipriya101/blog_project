import React from "react";
import "./home.style.css";
const Banner = () => {
  return (
    <>
      <div className="imgcon">
        <div>
          <img
            className="pic"
            src="https://images.unsplash.com/photo-1534531409543-069f6204c5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p className="text1">Title of vertical gallery</p>
          <p className="text2">Travel/August 21 2017</p>
        </div>
        <div className="box">
          <div>
            <img
              className="pic1"
              src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              className="pic2"
              src="https://images.unsplash.com/photo-1446483050676-bd2fdf3ac2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";
import avatar from "./../../images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center text-white h-100 flex-column">
        <img src={avatar} alt="avatar" className="mb-5" />
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start framework</h2>
        <div className="star d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}

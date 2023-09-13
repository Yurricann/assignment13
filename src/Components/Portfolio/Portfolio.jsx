import React from "react";
import { useEffect } from "react";
import firstImg from "./../../images/poert1.png";
import secondImg from "./../../images/port2.png";
import thirdImg from "./../../images/port3.png";

export default function Portfolio() {
  useEffect(() => {
    let hoverElements = document.querySelectorAll(".hovering");
    let model = document.querySelector(".modelHolder");
    hoverElements.forEach((ele) => {
      let x = ele.previousElementSibling.src;
      ele.addEventListener("click", () => {
        model.classList.remove("d-none");
        model.firstElementChild.src = x;
        model.addEventListener("click", (e) => {
          if (e.target === model) model.classList.add("d-none");
        });
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-5 mainCl">
          Portfolio Component
        </h2>
        <div className="star d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={firstImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={secondImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={thirdImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={firstImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={secondImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="overflow-hidden position-relative rounded">
              <img
                src={thirdImg}
                alt="house"
                className="w-100 rounded imgHover"
              />
              <div className="hovering position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modelHolder position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
        <img src="assets/images/poert1.png" alt="test" />
      </div>
    </>
  );
}

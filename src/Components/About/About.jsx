import React from "react";

export default function About() {
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center text-white h-100 flex-column">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">About Component</h2>
        <div className="star d-flex justify-content-center align-items-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <div className="container d-flex">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

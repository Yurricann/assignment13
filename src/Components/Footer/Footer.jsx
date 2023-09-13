import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row text-white">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <h3 className="text-uppercase">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <h3 className="text-uppercase">AROUND THE WEB</h3>
              <ul className="d-flex align-content-center justify-content-center gap-2 px-0">
                <li>
                  <i className="fa-brands fa-facebook mx-1"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter mx-1"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin mx-1"></i>
                </li>
                <li>
                  <i className="fa-solid fa-globe mx-1"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyRight text-center text-white py-4">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}

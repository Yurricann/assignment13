import React from "react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("keyup", () => {
        if (input.value.length > 0) {
          input.previousElementSibling.classList.add("top-0");
        } else {
          input.previousElementSibling.classList.remove("top-0");
        }
      });
    });
    let submitBtn = document.querySelector("form button");
    submitBtn.addEventListener("click", (e) => e.preventDefault());
  }, []);

  return (
    <>
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-5 mainCl">
        Contact Section
      </h2>
      <div className="star d-flex justify-content-center align-items-center mb-3">
        <div className="line me-3"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
      </div>
      <form className="w-50 p-3 mx-auto mt-5">
        <label htmlFor="userName" className="position-relative">
          userName :
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <label htmlFor="userAge" className="position-relative">
          userAge :
        </label>
        <input
          type="number"
          name="userAge"
          id="userAge"
          placeholder="userAge"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <label htmlFor="userEmail" className="position-relative">
          userEmail :
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="userEmail"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <label htmlFor="userpassword" className="position-relative">
          userPassword :
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="userPassword"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <button className="btn mt-4 text-white"> send Message </button>
      </form>
    </>
  );
}

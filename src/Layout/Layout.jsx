import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="holder">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

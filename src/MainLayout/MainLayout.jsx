import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-359px)] py-2 container mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MainLayout;

import React from "react";
import ThemeProvider from "../../Provider/ThemeProvider";

const Content = () => {
  return (
    <div className="px-6 py-10 text-center ">
      <h1 className="text-4xl font-bold text-gray-600 ">
        Task Management System
      </h1>
      <p className="mt-4 text-lg text-gray-400 ">
        Stay organized and enhance productivity with our powerful task
        management system. Easily create, edit, delete, and prioritize tasks
        using an intuitive drag-and-drop interface. Track progress in real-time
        and collaborate seamlessly with your team.
      </p>
    </div>
  );
};

export default Content;

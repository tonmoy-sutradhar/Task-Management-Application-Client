import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXenjGTb9_o1gs2nGfIgNYvl4rWseC2di8-w&s"
            alt=""
            className="rounded-xl "
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">
          Task Management Application
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A powerful and intuitive task management solution designed to help
          individuals and teams stay organized, boost productivity, and track
          progress effortlessly.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-xl">✔</span>
            <p className="text-gray-700 text-lg">
              Easy task creation and management
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-xl">✔</span>
            <p className="text-gray-700 text-lg">
              Seamless collaboration with team members
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-xl">✔</span>
            <p className="text-gray-700 text-lg">Real-time progress tracking</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-xl">✔</span>
            <p className="text-gray-700 text-lg">
              Deadline reminders and notifications
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://www.bitrix24.com/tasks/free_online_task_manager_1.php?utm_source=google&utm_medium=cpc&utm_campaign=20757919572-153878094125&gad_source=1&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQj9KDDcBhaJYWFRF0z8dMvJdsdlzA6xuWjjEly67sf99i_IOdvOJwhoC_rAQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

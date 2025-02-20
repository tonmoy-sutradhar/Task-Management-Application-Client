import { motion } from "motion/react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-white py-10 mt-14 mb-7 px-5 md:px-14 flex flex-col md:flex-row items-center justify-between"
    >
      {/* 0000000000000000000000000000000000 */}
      <div className="md:w-1/2 space-y-5 px-4">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="tasks" className="text-lg">
            ✅
          </span>
          <p className="text-green-600 font-semibold">
            Efficient Task Management, Simplified!
          </p>
        </div>

        <motion.h1
          animate={{ x: 0 }}
          transition={{
            duration: 0.4,
            delay: 1,
            ease: "linear",
          }}
          className="text-4xl font-bold"
        >
          Organize, Track, and{" "}
          <motion.span
            transition={{
              duration: 1.5,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            animate={{ color: ["#ec2607", "#6210e8", "#14f347"] }}
          >
            Complete Your Tasks Seamlessly
          </motion.span>
        </motion.h1>

        <p className="text-gray-600 text-lg">
          Stay on top of your daily workflow with an intuitive task management
          system. Drag, drop, and prioritize tasks effortlessly while syncing in
          real-time across all your devices.
        </p>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="email"
            placeholder="Enter your email to get started"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Link
            to="/dashboard"
            className="bg-green-300 text-black px-6 py-2 rounded-md"
          >
            Start Managing Tasks!
          </Link>
        </div>

        <div className="flex space-x-6 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-2xl">📅</span>
            <div>
              <p className="font-semibold">Real-Time Sync</p>
              <p className="text-gray-500 text-sm">
                Your tasks stay updated across all devices.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-2xl">🚀</span>
            <div>
              <p className="font-semibold">Drag & Drop Simplicity</p>
              <p className="text-gray-500 text-sm">
                Organize your tasks effortlessly with an intuitive UI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 0000000000000000000000000000000000 */}

      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        <img
          // src="https://terotam.com/wp-content/uploads/2022/07/Task-Management-software.png"
          src="https://cdn.educba.com/academy/wp-content/uploads/2017/02/Task-Management-Application.jpg"
          alt="Team Working"
          className="rounded-md shadow-lg object-cover w-full"
        />

        <div className="absolute -top-8 -right-4 bg-blue-200 p-4 shadow-md rounded-md">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-2xl">⭐</span>
            <span className="text-green-500 text-xl font-bold">4.8/5.0</span>
          </div>
          <p className="text-gray-600 text-sm">Reviewed by 365 users</p>
        </div>

        <div className="absolute bottom-4 left-4 bg-black text-white p-3 rounded-md flex items-center space-x-2">
          <div className="flex -space-x-2">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2484"
              alt="Visitor"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            <img
              src="https://secure.gravatar.com/avatar/c84f0c5858d6d11c40c7e6b1cd5ea334?s=250&d=mm&r=g"
              alt="Visitor"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Visitor"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          </div>
          {/* <span>1K+ Total </span> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

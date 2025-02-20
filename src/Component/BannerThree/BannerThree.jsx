// import React from "react";
// import { Link } from "react-router-dom";

// const BannerThree = () => {
//   return (
//     <div className="flex flex-col items-center px-4 py-10 bg-gray-50 mt-6">
//       <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
//         {/* Left Section - Images */}
//         <div className="flex  gap-4 lg:w-1/2">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/uploads/20240427182308/How-to-Manage-Tasks.webp"
//             alt="Team meeting"
//             className="w-full rounded-lg mt-8 mr-8  shadow-md"
//           />
//         </div>

//         {/* Right Section - Text Content */}
//         <div className="flex flex-col gap-6 lg:w-1/2">
//           {/* Stats */}
//           <div className="flex gap-8">
//             <div className="text-center bg-lime-200 p-1 rounded-lg">
//               <h2 className="text-4xl font-bold text-black">10+</h2>
//               <p className="text-gray-600">Years of experience</p>
//             </div>
//             <div className="text-center  bg-blue-200 p-1 rounded-lg">
//               <h2 className="text-4xl font-bold text-black">1.2K</h2>
//               <p className="text-gray-600">Happy customers</p>
//             </div>
//           </div>

//           {/* Heading and Description */}
//           <div>
//             <h1 className="text-3xl font-bold text-black">
//               Defining the future of online experiences!
//             </h1>
//             <p className="mt-2 text-gray-700">
//               Embrace a new era of digital success with Mizzle. Our team
//               combines cutting-edge design with robust development to deliver
//               websites that captivate and convert.
//             </p>
//           </div>

//           {/* Features List */}
//           <ul className="space-y-2">
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✔</span>
//               Emphasis on ROI-driven solutions
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✔</span>
//               Expert team with diverse skill
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-600 mr-2">✔</span>
//               Proven track record of delivering results
//             </li>
//           </ul>

//           {/* CTA Button */}
//           <Link
//             to="/allQuires"
//             className="bg-lime-400 text-center text-white px-6 py-2 rounded-lg hover:bg-gray-800"
//           >
//             Discover more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerThree;

// 00000000000000000000000000000
import React from "react";
import { Link } from "react-router-dom";

const BannerThree = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gray-50 mt-6">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {/* Left Section - Images */}
        <div className="flex gap-4 lg:w-1/2">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240427182308/How-to-Manage-Tasks.webp"
            alt="Task Management Dashboard"
            className="w-full rounded-lg mt-8 mr-8 shadow-md"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          {/* Stats */}
          <div className="flex gap-8">
            <div className="text-center bg-lime-200 p-1 rounded-lg">
              <h2 className="text-4xl font-bold text-black">100%</h2>
              <p className="text-gray-600">Task Completion Efficiency</p>
            </div>
            <div className="text-center bg-blue-200 p-1 rounded-lg">
              <h2 className="text-4xl font-bold text-black">1.5K+</h2>
              <p className="text-gray-600">Satisfied Users</p>
            </div>
          </div>

          {/* Heading and Description */}
          <div>
            <h1 className="text-3xl font-bold text-black">
              The Ultimate Task Management Solution!
            </h1>
            <p className="mt-2 text-gray-700">
              Stay organized and boost productivity with our powerful task
              management system. Drag, drop, and track your tasks in real-time
              to ensure seamless workflow management.
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              Effortless task organization with drag & drop
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              Real-time updates across all devices
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              Secure & intuitive collaboration tools
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            to="/dashboard"
            className="bg-lime-400 text-center text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Start Managing Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;

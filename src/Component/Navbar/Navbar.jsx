import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/image/tasklogo.jpg";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  // const handleLogout = async () => {
  //   console.log("Logout button clicked");
  //   try {
  //     await logOut();
  //     console.log("Logout successful, navigating to login page...");
  //     navigate("/login", { replace: true });
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
  // };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {user && (
        <>
          <NavLink to="/allTask">All Task</NavLink>
          <NavLink to="/addTask">Add Task</NavLink>
        </>
      )}

      {/* <NavLink to="/#">All Recommended</NavLink> */}
    </>
  );
  return (
    <>
      <div className="navbar bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 opacity-80 px-6 fixed top-0 left-0 w-full z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-bold menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-12 h-12 rounded-lg" src={logo} alt="" />
            <h1 className="btn btn-ghost text-2xl text-blue-800">TaskCo</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-bold">{links}</ul>
        </div>

        <div className="navbar-end gap-3">
          <button
            title="Change theme"
            onClick={toggleTheme}
            className={` text-3xl mr-3 bg-[#e26fc1] font-bold transition duration-300 rounded-md shadow ${
              theme === "light" ? "text-black " : "text-black bg-gray-950 "
            }`}
          >
            {theme === "light" ? "🌙" : "🌞"}
          </button>
          {user && user?.email ? (
            <div className="flex justify-center items-center gap-3">
              <img
                title={user?.displayName}
                className="w-11 rounded-full"
                src={user?.photoURL}
                alt="Profile-photo"
              />

              <button
                onClick={handleLogout}
                // onClick={logOut}
                className="rounded-full bg-red-500 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <NavLink
                to="/login"
                className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

// 999999999999999999999999999999999999999999999

// import { useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../assets/image/tasklogo.jpg";
// import useAuth from "../../hooks/useAuth";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logOut } = useAuth();

//   const handleLogout = async () => {
//     console.log("Logout button clicked");
//     try {
//       await logOut();
//       console.log("Logout successful");
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   // Navigate when user state becomes null
//   useEffect(() => {
//     if (!user) {
//       console.log("User is null, navigating to login...");
//       navigate("/login", { replace: true });
//     }
//   }, [user, navigate]);

//   return (
//     <div className="navbar bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 opacity-80 px-6 fixed top-0 left-0 w-full z-10">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//         </div>
//         <Link to="/" className="flex items-center">
//           <img className="w-12 h-12 rounded-lg" src={logo} alt="Logo" />
//           <h1 className="btn btn-ghost text-2xl text-blue-800">TaskCo</h1>
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-4 font-bold">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/#">All Quires</NavLink>
//           {user && (
//             <>
//               <NavLink to="/#">Add Quires</NavLink>
//               <NavLink to="/#">My Quires</NavLink>
//               <NavLink to="/#">My Recommended</NavLink>
//             </>
//           )}
//           <NavLink to="/#">All Recommended</NavLink>
//         </ul>
//       </div>

//       <div className="navbar-end gap-3">
//         {user ? (
//           <div className="flex justify-center items-center gap-3">
//             <img
//               title={user?.displayName}
//               className="w-11 rounded-full"
//               src={user?.photoURL}
//               alt="Profile-photo"
//             />
//             <button
//               onClick={handleLogout}
//               className="rounded-full bg-red-500 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
//             >
//               LogOut
//             </button>
//           </div>
//         ) : (
//           <div className="flex justify-center items-center gap-3">
//             <NavLink
//               to="/login"
//               className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
//             >
//               Log In
//             </NavLink>
//             <NavLink
//               to="/signup"
//               className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"
//             >
//               Register
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

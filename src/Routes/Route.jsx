import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddTask from "../Component/AddTask/AddTask";
import AllTask from "../Component/AllTask/AllTask";
import About from "../Component/About/About";
import EditTask from "../Component/EditTask/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "/editTask/:id",
        element: <EditTask></EditTask>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
